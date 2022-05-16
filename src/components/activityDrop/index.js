import React, { useRef, useContext, useState } from 'react'
import { Container, Activity, ActivityContainer, ActivityContent, Heading, DragDropInfo } from './styles'
import { CardActionArea } from '@mui/material'
import { AppContext } from './../../AppContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ActivityDrop = () => {

    const { store, setStore } = useContext(AppContext);
    const ref = useRef(null);
    const [actAlert, setActAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setActAlert(false);
    };

    const drop = (e) => {
        e.preventDefault()

        const card_info = JSON.parse(e.dataTransfer.getData('card_info'))

        let mappedActivities = store.selectedEvent.dropActivities
        mappedActivities = [card_info].concat(mappedActivities)

        setStore({
            ...store,
            events: store.events.map(e => ({ ...e, dropActivities: store.selectedEvent.id === e.id ? mappedActivities : e.dropActivities })),
            selectedEvent: { ...store.selectedEvent, dropActivities: mappedActivities },
            activities: store.activities.filter(a => a.id !== card_info.id)
        })

        setActAlert(true);
    }

    const dragOver = (e) => {
        e.preventDefault()
    }

    const dragStart = (e) => {
        const target = e.target
        const { name, description } = store.selectedEvent.dropActivities.find(a => a.id === target.id)
        e.dataTransfer.setData("card_info", JSON.stringify({ id: target.id, name, description }))
    }

    const cardDragEnd = e => {
        e.stopPropagation()
    }

    return (
        <Container
            onDrop={drop}
            onDragOver={dragOver}
        >
            <Snackbar open={actAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
                    Activity Mapped to this Event!
                </Alert>
            </Snackbar>
            <Heading>Mapped Activities</Heading>
            <ActivityContainer
                ref={ref}
            >
                {store.selectedEvent.id !== "" ?
                    store.selectedEvent.dropActivities.length !== 0 ?
                        store.selectedEvent.dropActivities.map(activity =>
                            <Activity
                                key={activity.id}
                                id={activity.id}
                                draggable="true"
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
                            </Activity>) : <DragDropInfo>Drag and drop in this region to map activities.</DragDropInfo>
                    : <DragDropInfo>Select an Event to view mapped activities.</DragDropInfo>}
            </ActivityContainer>
        </Container>
    )
}

export default ActivityDrop