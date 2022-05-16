import React, { useEffect, useState, useContext } from 'react'
import { Container, SearchField, ActivityContainer, ActivityContent, Activity, NoActivityInfo } from "./styles"
import { CardActionArea } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Fuse from "fuse.js";
import { AppContext } from './../../AppContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
//import axios from 'axios';
//import { activities as activitiesDummy } from "./../../dummy/activities"

const ListOfActivites = (props) => {

    const { store, setStore } = useContext(AppContext);
    const [activities, setActivities] = useState([])
    const [search, setSearch] = useState("")
    let fuse = new Fuse(store.activities, {
        keys: ["name"],
    });
    const [actAlert, setActAlert] = useState(false)

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
        let mappedActivities = store.selectedEvent.dropActivities.filter(a => a.id !== card_info.id)
        setStore({
            ...store,
            activities: [card_info].concat(store.activities),
            selectedEvent: {
                ...store.selectedEvent,
                dropActivities: mappedActivities
            },
            events: store.events.map(e => ({
                ...e,
                dropActivities: store.selectedEvent.id === e.id ? mappedActivities : e.dropActivities
            })),
        })
        setActAlert(true);
    }

    const dragOver = (e) => {
        e.preventDefault()
    }

    /*useEffect(() => {
        const getAllActivities = async () => {
            try {
                const { data } = await axios("https://39480cf6-d2ac-44de-b113-ce52a5b8e509.mock.pstmn.io/api/activities")
                let activityData = data.map(e => ({ ...e, id: toString(e.id) }))
                setStore({
                    ...store,
                    activities: activityData,
                })
            }
            catch (e) {
                console.log(e)
                setStore({
                    ...store,
                    activities: activitiesDummy,
                })
            }
        }
        getAllActivities()
        // eslint-disable-next-line
    }, [])*/

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
                    </Activity>) : <NoActivityInfo>No Activities here. Feel free to create a new one!</NoActivityInfo>}
            </ActivityContainer>
        </Container>
    )
}

export default ListOfActivites