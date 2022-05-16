import React, { useState, useContext } from 'react'
import { Container, AddActivityButton, AddEventButton, Details, Modal, ModalTitle, ModalActions, CopyJson, ModalContent, TypeField, ModalButton, ExportButton } from './styles'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { AppContext } from './../../AppContext';
import { v4 as uuid } from 'uuid';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const SelectedEventDetails = () => {

    const { store, actions } = useContext(AppContext);
    const [activityModalOpen, setActivityModalOpen] = useState(false);
    const [eventModalOpen, setEventModalOpen] = useState(false);

    const [actName, setActName] = useState("")
    const [actDesc, setActDesc] = useState("")
    const [evtName, setEvtName] = useState("")
    const [evtDesc, setEvtDesc] = useState("")

    const [actAlert, setActAlert] = useState(false)
    const [evtAlert, setEvtAlert] = useState(false)
    const [cpyAlert, setCpyAlert] = useState(false)
    const [exptAlert, setExptAlert] = useState(false)

    const addActivity = (e) => {
        const newActivity = {
            id: uuid(),
            name: actName,
            description: actDesc,
        }
        actions.addActivity(newActivity)
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
            dropActivities: [],
        }
        actions.addEvent(newEvent)
        setEventModalOpen(false)
        setEvtAlert(true)
        setEvtName("")
        setEvtDesc("")
    }

    const handleCopyText = (e) => {
        const exportDetails = store.selectedEvent
        navigator.clipboard.writeText(JSON.stringify(exportDetails))
        setCpyAlert(true)
    }

    const exportToJson = () => {
        let objectData = store.selectedEvent
        let filename = "export.json";
        let contentType = "application/json;charset=utf-8;";
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData)))], { type: contentType });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            var a = document.createElement('a');
            a.download = filename;
            a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(objectData));
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        setExptAlert(true)
    }

    return (
        <Container>
            <Stack spacing={2}>
                <Snackbar open={actAlert} autoHideDuration={6000} onClose={() => setActAlert(false)}>
                    <Alert onClose={() => setActAlert(false)} severity="success" sx={{ width: '100%' }} variant="filled">
                        Activity Added!
                    </Alert>
                </Snackbar>
                <Snackbar open={evtAlert} autoHideDuration={6000} onClose={() => setEvtAlert(false)}>
                    <Alert onClose={() => setEvtAlert(false)} severity="success" sx={{ width: '100%' }} variant="filled">
                        Event Added!
                    </Alert>
                </Snackbar>
                <Snackbar open={cpyAlert} autoHideDuration={6000} onClose={() => setCpyAlert(false)}>
                    <Alert onClose={() => setCpyAlert(false)} severity="success" sx={{ width: '100%' }} variant="filled">
                        Event details along with mapped activities copied to clipboard!
                    </Alert>
                </Snackbar>
                <Snackbar open={exptAlert} autoHideDuration={6000} onClose={() => setExptAlert(false)}>
                    <Alert onClose={() => setExptAlert(false)} severity="success" sx={{ width: '100%' }} variant="filled">
                        Events details successfully exported!
                    </Alert>
                </Snackbar>
            </Stack>
            <Details elevation={5}>{store.selectedEvent.id !== "" ? "Description: " + store.selectedEvent.description : "Select event to view description"}</Details>
            <div>
                <CopyJson
                    variant="contained"
                    onClick={handleCopyText}
                    disabled={store.selectedEvent.id === ""}
                >
                    <ContentCopyIcon />
                </CopyJson>
                <ExportButton
                    variant="contained"
                    startIcon={<AddOutlinedIcon />}
                    onClick={exportToJson}
                    disabled={store.selectedEvent.id === ""}
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