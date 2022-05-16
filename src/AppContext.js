import { createContext, useState, useEffect } from "react";
import { activities as activitiesDummy } from "./dummy/activities"
import { events as eventsDummy } from "./dummy/events"
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

    /*useEffect(() => {
        const getAllEventsAndActivities = async () => {
            try {
                const { edata } = await axios("https://39480cf6-d2ac-44de-b113-ce52a5b8e509.mock.pstmn.io/api/events")
                const { adata } = await axios("https://39480cf6-d2ac-44de-b113-ce52a5b8e509.mock.pstmn.io/api/activities")
                let activityData = adata.map(e => ({ ...e, id: toString(e.id) }))
                let eventsData = edata.map(e => ({ ...e, dropActivities: [] }))
                setStore(s => ({
                    ...s,
                    events: eventsData,
                    activities: activityData,
                }))
            }
            catch (e) {
                console.log(e)
                setStore(s => ({
                    ...s,
                    events: eventsDummy,
                    activities: activitiesDummy,
                }))
            }
        }
        getAllEventsAndActivities()
    }, [setStore])*/

    useEffect(() => {
        const getAllEvents = async () => {
            try {
                const { edata } = await axios("https://39480cf6-d2ac-44de-b113-ce52a5b8e509.mock.pstmn.io/api/events")
                let eventsData = edata.map(e => ({ ...e, dropActivities: [] }))
                setStore(s => ({
                    ...s,
                    events: eventsData,
                }))
            }
            catch (e) {
                console.log(e)
                setStore(s => ({
                    ...s,
                    events: eventsDummy,
                }))
            }
        }
        getAllEvents()
    }, [setStore])

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
        addActivity: activity => setStore({ ...store, activities: store.activities.concat(activity) }),
        addEvent: event => setStore({ ...store, events: store.events.concat(event) }),
        addDropActivity: dropActivity => setStore({ ...store, dropActivities: store.dropActivities.concat(dropActivity) }),
        setActivities: activities => setStore({ ...store, activities: activities }),
        setEvents: events => setStore({ ...store, events: events }),
        removeActivity: id => setStore({ ...store, activities: store.activities.filter(a => a.id !== id) }),
        removeDropActivity: id => setStore({ ...store, dropActivities: store.dropActivities.filter(a => a.id !== id) }),
        removeEvent: id => setStore({ ...store, activities: store.activities.filter(a => a.id !== id) }),
        removeAllActivities: () => setStore({ ...store, activities: [] }),
        removeAllDropActivities: () => setStore({ ...store, dropActivities: [] }),
        removeAllEvents: () => setStore({ ...store, events: [] })
    });

    return (
        <AppContext.Provider value={{ store, actions, setStore }}>
            {props.children}
        </AppContext.Provider>
    );
}