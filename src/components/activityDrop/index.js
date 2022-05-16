import React, { useRef, useContext, useState } from 'react'
import { Container, Activity, ActivityContainer, ActivityContent, Heading, MapButton, DragDropInfo } from './styles'
import { CardActionArea } from '@mui/material'
import { AppContext } from './../../AppContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ActivityDrop = () => {

    const { store, actions } = useContext(AppContext);
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

        actions.addDropActivityToSelectedEvent(card_info)
        actions.addDropActivityToAllEvents(card_info)
        actions.removeActivity(card_info.id)

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

    const dropActivity = (card_info) => {
        actions.addActivity(card_info)
        actions.removeDropActivityFromSelectedEvent(card_info.id)
        actions.removeDropActivityFromAllEvents(card_info.id)
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
                                <MapButton
                                    variant="outlined"
                                    disabled={store.selectedEvent.id === ""}
                                    onClick={() => dropActivity({ id: activity.id, name: activity.name, description: activity.description })}
                                >
                                    UnMap Activity
                                </MapButton>
                            </Activity>) : <DragDropInfo>Drag and drop in this region to map activities.</DragDropInfo>
                    : <DragDropInfo>Select an Event to view mapped activities.</DragDropInfo>}
            </ActivityContainer>
        </Container>
    )
}

export default ActivityDrop