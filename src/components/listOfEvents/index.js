import React, { useEffect, useState } from 'react'
import { Container, SearchField, EventContainer, EventItemButton, EventItemText, Event } from "./styles"
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Fuse from "fuse.js";

const ListOfEvents = () => {
    const [events, setEvents] = useState([])
    const [allEvents, setAllEvents] = useState([])
    const [search, setSearch] = useState("")
    const [selectedEvent, setSelectedEvent] = useState({})

    let fuse = new Fuse(allEvents, {
        keys: ["name", "description"],
    });

    useEffect(() => {
        if (search === "") {
            const getAllEvents = async () => {
                const { data } = await axios("https://39480cf6-d2ac-44de-b113-ce52a5b8e509.mock.pstmn.io/api/events")
                setEvents(data)
                setAllEvents(data)
            }
            getAllEvents()
        }
    }, [search])

    const handleOnChange = (e) => {
        setSearch(e.target.value)
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

    const handleEventSelection = (id) => {
        const event = allEvents.find(event => event.id === id)
        event !== null ? setSelectedEvent(event) : setSelectedEvent({})
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
                    let isSelected = selectedEvent.id === event.id ? true : false
                    return (
                        <Event key={event.id} disablePadding isSelected={isSelected}>
                            <EventItemButton onClick={(e) => handleEventSelection(event.id)}>
                                <EventItemText id={event.id} primary={event.name} />
                            </EventItemButton>
                        </Event>
                    )
                })
                    : <div>No Events</div>}
            </EventContainer>
        </Container>
    )
}

export default ListOfEvents