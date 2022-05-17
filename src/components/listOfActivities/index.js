import React, { useEffect, useState, useContext } from 'react'
import { Container, SearchField, ActivityContainer, ActivityContent, Activity, NoActivityInfo, MapButton } from "./styles"
import { CardActionArea } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Fuse from "fuse.js";
import { AppContext } from './../../AppContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { activities as activitiesDummy } from "./../../dummy/activities"
import { v4 as uuid } from 'uuid';

const ListOfActivites = (props) => {

    const { store, actions } = useContext(AppContext);
    const [activities, setActivities] = useState([])
    const [search, setSearch] = useState("")
    let fuse = new Fuse(store.activities, {
        keys: ["name"],
    });
    const [actAlert, setActAlert] = useState(false)
    const [apiFailAlert, setApiFailAlert] = useState(false)
    const [message, setMessage] = useState("")

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setActAlert(false);
    };

    const dragStart = (e) => {
        const target = e.target
        const { name, description } = store.activities.find(a => a.id === target.id)
        e.dataTransfer.setData("card_info", JSON.stringify({ id: target.id, name, description }))
    }

    const cardDragEnd = e => {
        e.stopPropagation()
    }

    const drop = (e) => {
        e.preventDefault()
        let card_info = JSON.parse(e.dataTransfer.getData('card_info'))

        actions.addActivity(card_info)
        actions.removeDropActivityFromSelectedEvent(card_info.id)
        actions.removeDropActivityFromAllEvents(card_info.id)
        setActAlert(true);
    }

    const dropActivity = (card_info) => {
        actions.addDropActivityToSelectedEvent(card_info)
        actions.addDropActivityToAllEvents(card_info)
        actions.removeActivity(card_info.id)
    }

    const dragOver = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        const getAllActivities = async () => {
            try {
                const { data } = await axios("//tfams429.dev.triomics.in/api/activities")
                let activityData = data.items.map(e => ({ ...e, id: uuid() }))
                actions.setActivities(activityData)
            }
            catch (e) {
                let code = e.response.status
                let name = e.response.data.error.name
                let message = `Activity API failed with response code: ${code}(${name}). To test the application, some dummy activities have been filled.`
                setMessage(message)
                setApiFailAlert(true)
                let activityData = activitiesDummy.map(e => ({ ...e, id: e.id.toString() }))
                actions.setActivities(activityData)
            }
        }
        getAllActivities()
    }, [actions])

    useEffect(() => {
        setActivities(store.activities)
        setSearch("")
    }, [store.activities])


    const handleOnChange = (e) => {
        setSearch(e.target.value)
        if (e.target.value === "") {
            setActivities(store.activities)
        }
        else {
            const result = fuse.search(e.target.value)
            const matches = []
            if (!result.length) {
                setActivities([]);
            } else {
                result.forEach(({ item }) => {
                    matches.push(item);
                });
                setActivities(matches)
            }
        }
    }

    return (
        <Container>
            <Snackbar open={actAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }} variant="filled">
                    Activity unmapped from this Event!
                </Alert>
            </Snackbar>
            <Snackbar open={apiFailAlert} autoHideDuration={10000} onClose={() => setApiFailAlert(false)}>
                <Alert onClose={() => setApiFailAlert(false)} severity="error" sx={{ width: '100%' }} variant="filled">
                    {message}
                </Alert>
            </Snackbar>
            <SearchField
                label="Search Activities"
                value={search}
                onChange={handleOnChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <ActivityContainer
                onDrop={drop}
                onDragOver={dragOver}
            >
                {activities.length !== 0 ? activities.map(activity =>
                    <Activity
                        key={activity.id}
                        id={activity.id}
                        draggable={store.selectedEvent.id !== "" ? "true" : "false"}
                        onDragStart={dragStart}
                        onDragEnd={cardDragEnd}
                        elevation={3}
                    >
                        <CardActionArea>
                            <ActivityContent>
                                <h3>{activity.name}</h3>
                                <p>{activity.description}</p>
                            </ActivityContent>
                        </CardActionArea>
                        <MapButton
                            variant="outlined"
                            disabled={store.selectedEvent.id === ""}
                            onClick={() => dropActivity({ id: activity.id, name: activity.name, description: activity.description })}
                        >
                            Map Activity
                        </MapButton>
                    </Activity>) : <NoActivityInfo>No Activities here. Feel free to create a new one!</NoActivityInfo>}
            </ActivityContainer>
        </Container>
    )
}

export default ListOfActivites