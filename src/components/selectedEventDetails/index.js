import React, { useState } from 'react'
import { Container, AddActivityButton, AddEventButton, Details, Modal, ModalTitle, ModalActions, ModalContent, TypeField, ModalButton } from './styles'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const SelectedEventDetails = () => {

    const [activityModalOpen, setActivityModalOpen] = useState(false);
    const [eventModalOpen, setEventModalOpen] = useState(false);

    return (
        <Container>
            <Details elevation={5}> dssfsdfsfsd</Details>
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
            <Modal open={activityModalOpen} onClose={() => setActivityModalOpen(false)}>
                <ModalTitle>Add Activity</ModalTitle>
                <ModalContent>
                    <TypeField
                        autoFocus
                        margin="dense"
                        id="activity-name"
                        label="Activity Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TypeField
                        autoFocus
                        margin="dense"
                        id="activity-desc"
                        label="Activity Description"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </ModalContent>
                <ModalActions>
                    <ModalButton onClick={() => setActivityModalOpen(false)}>Cancel</ModalButton>
                    <ModalButton onClick={() => setActivityModalOpen(false)}>Add</ModalButton>
                </ModalActions>
            </Modal>
            <Modal open={eventModalOpen} onClose={() => setEventModalOpen(false)}>
                <ModalTitle>Add Event</ModalTitle>
                <ModalContent>
                    <TypeField
                        autoFocus
                        margin="dense"
                        id="event-name"
                        label="Event Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TypeField
                        autoFocus
                        margin="dense"
                        id="event-desc"
                        label="Event Description"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </ModalContent>
                <ModalActions>
                    <ModalButton onClick={() => setEventModalOpen(false)}>Cancel</ModalButton>
                    <ModalButton onClick={() => setEventModalOpen(false)}>Add</ModalButton>
                </ModalActions>
            </Modal>
        </Container>
    )
}

export default SelectedEventDetails