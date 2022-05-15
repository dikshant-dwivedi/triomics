import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const ContextWrapper = (props) => {
    const [store, setStore] = useState({
        activities: [],
        dropActivities: [],
        events: [],
    });

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