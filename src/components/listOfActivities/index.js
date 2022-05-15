import React, { useEffect, useState } from 'react'
import { Container, SearchField, ActivityContainer, ActivityContent, Activity } from "./styles"
import { CardActionArea } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Fuse from "fuse.js";

const ListOfActivites = () => {

    const [activities, setActivities] = useState([])
    const [allActivities, setAllActivities] = useState([])
    const [search, setSearch] = useState("")
    let fuse = new Fuse(allActivities, {
        keys: ["name", "description"],
    });

    useEffect(() => {
        if (search === "") {
            const getAllActivities = async () => {
                const { data } = await axios("https://39480cf6-d2ac-44de-b113-ce52a5b8e509.mock.pstmn.io/api/activities")
                setActivities(data)
                setAllActivities(data)
            }
            getAllActivities()
        }
    }, [search])

    const handleOnChange = (e) => {
        setSearch(e.target.value)
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

    return (
        <Container>
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
            <ActivityContainer>
                {activities.length !== 0 ? activities.map(activity =>
                    <Activity key={activity.id}>
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