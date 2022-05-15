import React, { useEffect, useState, useContext } from 'react'
import { Container, SearchField, EventContainer, EventItemButton, EventItemText, Event, NoEventInfo } from "./styles"
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Fuse from "fuse.js";
import { AppContext } from './../../AppContext';

const ListOfEvents = () => {
    const [events, setEvents] = useState([])
    const [search, setSearch] = useState("")
    const { store, setStore, actions } = useContext(AppContext);

    let fuse = new Fuse(store.events, {
        keys: ["name"],
    });

    useEffect(() => {
        const getAllEvents = async () => {
            const { data } = await axios("https://39480cf6-d2ac-44de-b113-ce52a5b8e509.mock.pstmn.io/api/events")
            setEvents(data)
            actions.setEvents(data)
        }
        getAllEvents()
    }, [actions])

    const handleOnChange = (e) => {
        setSearch(e.target.value)
        if (e.target.value === "") {
            setEvents(store.events)
        }
        else {
            const result = fuse.search(e.target.value)
            const matches = []
            if (!result.length) {
                setEvents([]);
            } else {
                result.forEach(({ item }) => {
                    matches.push(item);
                });
                setEvents(matches)
            }
        }

    }

    useEffect(() => {
        setEvents(store.events)
        setSearch("")
    }, [store.events])

    const handleEventSelection = async (id) => {
        if (store.selectedEvent.id !== id) {
            const event = store.events.find(event => event.id === id)
            if (event !== null) {
                const { data } = await axios("https://39480cf6-d2ac-44de-b113-ce52a5b8e509.mock.pstmn.io/api/activities")
                setStore({
                    ...store,
                    activities: data,
                    dropActivities: [],
                    selectedEvent: event,
                })
            }
        }
    }

    return (
        <Container>
            <SearchField
                label="Search Events"
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
            <EventContainer>
                {events.length !== 0 ? events.map(event => {
                    let isSelected = store.selectedEvent.id === event.id ? true : false
                    console.log(store.selectedEvent.id + "     " + event.id)
                    return (
                        <Event key={event.id} disablePadding isSelected={isSelected}>
                            <EventItemButton onClick={(e) => handleEventSelection(event.id)}>
                                <EventItemText id={event.id} primary={event.name} />
                            </EventItemButton>
                        </Event>
                    )
                })
                    : <NoEventInfo>No Events here. Feel free to create a new one.</NoEventInfo>}
            </EventContainer>
        </Container >
    )
}

export default ListOfEvents