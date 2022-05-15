import React, { useEffect, useState, useContext } from 'react'
import { Container, SearchField, ActivityContainer, ActivityContent, Activity } from "./styles"
import { CardActionArea } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Fuse from "fuse.js";
import { AppContext } from './../../AppContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ListOfActivites = (props) => {

    const { store, setStore } = useContext(AppContext);
    const [activities, setActivities] = useState([])
    const [search, setSearch] = useState("")
    let fuse = new Fuse(store.activities, {
        keys: ["name", "description"],
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
        const { name, description } = store.activities.find(a => a.id === parseInt(target.id))
        e.dataTransfer.setData("card_info", JSON.stringify({ id: target.id, name, description }))
    }

    const cardDragEnd = e => {
        e.stopPropagation()
    }

    const drop = (e) => {
        e.preventDefault()
        let card_info = JSON.parse(e.dataTransfer.getData('card_info'))
        let id = card_info.id
        card_info.id = parseInt(card_info.id)
        setStore({ ...store, activities: store.activities.concat(card_info), dropActivities: store.dropActivities.filter(a => a.id !== id) })
        setActAlert(true);
    }

    const dragOver = (e) => {
        e.preventDefault()
    }

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
                        draggable="true"
                        onDragStart={dragStart}
                        onDragEnd={cardDragEnd}
                    >
                        <CardActionArea>
                            <ActivityContent>
                                <h3>{activity.name}</h3>
                                <p>{activity.description}</p>
                            </ActivityContent>
                        </CardActionArea>
                    </Activity>) : <div>No Activities</div>}
            </ActivityContainer>
        </Container>
    )
}

export default ListOfActivites