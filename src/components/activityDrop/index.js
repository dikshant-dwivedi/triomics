import React, { useRef, useContext, useState } from 'react'
import { Container, Activity, ActivityContainer, ActivityContent, Heading } from './styles'
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
        let id = parseInt(card_info.id)
        setStore({ ...store, dropActivities: store.dropActivities.concat(card_info), activities: store.activities.filter(a => a.id !== id) })
        setActAlert(true);
        if (ref.current) {
            const offsetBottom = ref.current.offsetTop + ref.current.offsetHeight;
            ref.current.scrollTo({ top: offsetBottom });
        }
    }

    const dragOver = (e) => {
        e.preventDefault()
    }

    const dragStart = (e) => {
        const target = e.target
        const { name, description } = store.dropActivities.find(a => a.id === target.id)
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
                {store.dropActivities.length !== 0 ? store.dropActivities.map(activity =>
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

export default ActivityDrop