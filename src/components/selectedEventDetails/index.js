import React, { useState, useContext } from 'react'
import { Container, AddActivityButton, AddEventButton, Details, Modal, ModalTitle, ModalActions, ModalContent, TypeField, ModalButton, ExportButton } from './styles'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { AppContext } from './../../AppContext';
import { v4 as uuid } from 'uuid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SelectedEventDetails = () => {

    const { store, setStore } = useContext(AppContext);
    const [activityModalOpen, setActivityModalOpen] = useState(false);
    const [eventModalOpen, setEventModalOpen] = useState(false);

    const [actName, setActName] = useState("")
    const [actDesc, setActDesc] = useState("")
    const [evtName, setEvtName] = useState("")
    const [evtDesc, setEvtDesc] = useState("")

    const [actAlert, setActAlert] = useState(false)
    const [evtAlert, setEvtAlert] = useState(false)
    const [cpyAlert, setCpyAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setActAlert(false);
        setEvtAlert(false);
        setCpyAlert(false);
    };

    const addActivity = (e) => {
        const newActivity = {
            id: Math.floor((Math.random() * 1000) + 1),
            name: actName,
            description: actDesc,
        }
        setStore({ ...store, activities: [newActivity].concat(store.activities) })
        setActivityModalOpen(false)
        setActAlert(true)
        setActName("")
        setActDesc("")
    }

    const addEvent = (e) => {
        const newEvent = {
            id: uuid(),
            name: evtName,
            description: evtDesc,
        }
        setStore({ ...store, events: [newEvent].concat(store.events), selectedEvent: { id: "" } })
        setEventModalOpen(false)
        setEvtAlert(true)
        setEvtName("")
        setEvtDesc("")
    }

    const handleCopyText = (e) => {
        const exportDetails = { ...store.selectedEvent, mappedDetails: store.dropActivities }
        navigator.clipboard.writeText(JSON.stringify(exportDetails))
        setCpyAlert(true)
    }

    return (
        <Container>
            <Snackbar open={actAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
                    Activity Added!
                </Alert>
            </Snackbar>
            <Snackbar open={evtAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
                    Event Added!
                </Alert>
            </Snackbar>
            <Snackbar open={cpyAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
                    Event details along with mapped activities copied to clipboard!
                </Alert>
            </Snackbar>
            <Details elevation={5}>{store.selectedEvent.id !== "" ? "Description: " + store.selectedEvent.description : "Select event to view description"}</Details>
            <div>
                <ExportButton
                    variant="contained"
                    startIcon={<AddOutlinedIcon />}
                    onClick={handleCopyText}
                    disabled={store.selectedEvent.id === "" || store.dropActivities.length === 0}
                >
                    Export Json
                </ExportButton>
                <AddEventButton
                    variant="contained"
                    startIcon={<AddOutlinedIcon />}
                    onClick={() => setEventModalOpen(true)}
                >
                    Add Event
                </AddEventButton>
                <AddActivityButton
                    variant="contained"
                    startIcon={<AddOutlinedIcon />}
                    onClick={() => setActivityModalOpen(true)}
                    disabled={store.selectedEvent.id === ""}
                >
                    Add Activity
                </AddActivityButton>
            </div>
            <Modal open={activityModalOpen} onClose={() => setActivityModalOpen(false)}>
                <ModalTitle>Add Activity</ModalTitle>
                <ModalContent>
                    <TypeField
                        autoFocus
                        margin="dense"
                        value={actName}
                        onChange={(e) => setActName(e.target.value)}
                        id="activity-name"
                        label="Activity Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TypeField
                        autoFocus
                        margin="dense"
                        value={actDesc}
                        onChange={(e) => setActDesc(e.target.value)}
                        id="activity-desc"
                        label="Activity Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                </ModalContent>
                <ModalActions>
                    <ModalButton onClick={() => setActivityModalOpen(false)}>Cancel</ModalButton>
                    <ModalButton disabled={!actName || !actDesc} onClick={addActivity}>Add</ModalButton>
                </ModalActions>
            </Modal>
            <Modal open={eventModalOpen} onClose={() => setEventModalOpen(false)}>
                <ModalTitle>Add Event</ModalTitle>
                <ModalContent>
                    <TypeField
                        autoFocus
                        margin="dense"
                        value={evtName}
                        onChange={(e) => setEvtName(e.target.value)}
                        id="event-name"
                        label="Event Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                    <TypeField
                        autoFocus
                        margin="dense"
                        value={evtDesc}
                        onChange={(e) => setEvtDesc(e.target.value)}
                        id="event-desc"
                        label="Event Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                </ModalContent>
                <ModalActions>
                    <ModalButton onClick={() => setEventModalOpen(false)}>Cancel</ModalButton>
                    <ModalButton disabled={!evtName || !evtDesc} onClick={addEvent}>Add</ModalButton>
                </ModalActions>
            </Modal>
        </Container>
    )
}

export default SelectedEventDetails