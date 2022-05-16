import { createContext, useState, useEffect } from "react";
import { activities as activitiesDummy } from "./dummy/activities"
import axios from 'axios'

export const AppContext = createContext(null);

export const ContextWrapper = (props) => {

    const [store, setStore] = useState({
        activities: [],
        events: [],
        selectedEvent: {
            id: "",
            name: "",
            description: "",
            dropActivities: [],
        },
    });

    useEffect(() => {
        const getAllActivities = async () => {
            try {
                const { adata } = await axios("https://39480cf6-d2ac-44de-b113-ce52a5b8e509.mock.pstmn.io/api/activities")
                let activityData = adata.map(e => ({ ...e, id: toString(e.id) }))
                setStore(s => ({
                    ...s,
                    activities: activityData,
                }))
            }
            catch (e) {
                console.log(e)
                let activityData = activitiesDummy.map(e => ({ ...e, id: e.id.toString() }))
                setStore(s => ({
                    ...s,
                    activities: activityData,
                }))
            }
        }
        getAllActivities()
    }, [setStore])

    // eslint-disable-next-line
    const [actions, setActions] = useState({
        setActivities: activities => setStore(s => ({ ...s, activities: activities })),
        setEvents: events => setStore(s => ({ ...s, events: events })),
        addActivity: activity => setStore(s => ({ ...s, activities: [activity].concat(s.activities) })),
        addEvent: event => setStore(s => ({ ...s, events: [event].concat(s.events) })),
        addDropActivityToAllEvents: activity => setStore(s => {
            return ({
                ...s,
                events: s.events.map(e => ({ ...e, dropActivities: s.selectedEvent.id === e.id ? s.selectedEvent.dropActivities : e.dropActivities })),
            })
        }),
        addDropActivityToSelectedEvent: activity => setStore(s => {
            let mappedActivities = s.selectedEvent.dropActivities
            mappedActivities = [activity].concat(mappedActivities)
            return ({
                ...s,
                selectedEvent: { ...s.selectedEvent, dropActivities: mappedActivities },
            })
        }),
        removeActivity: id => setStore(s => ({ ...s, activities: s.activities.filter(a => a.id !== id) })),
        removeDropActivityFromSelectedEvent: id => setStore(s => {
            let mappedActivities = s.selectedEvent.dropActivities.filter(a => a.id !== id)
            console.log("I came here")
            return ({
                ...s,
                selectedEvent: {
                    ...s.selectedEvent,
                    dropActivities: mappedActivities
                },
            })
        }),
        removeDropActivityFromAllEvents: id => setStore(s => {
            return ({
                ...s,
                events: s.events.map(e => ({
                    ...e,
                    dropActivities: s.selectedEvent.id === e.id ? s.selectedEvent.dropActivities : e.dropActivities
                })),
            })
        }),
        setSelectedEvent: event => setStore(s => ({ ...s, selectedEvent: event }))
    });

    return (
        <AppContext.Provider value={{ store, actions }}>
            {props.children}
        </AppContext.Provider>
    );
}