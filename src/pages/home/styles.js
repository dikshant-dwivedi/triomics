import styled from "styled-components";
//import { styled as muiStyled } from '@mui/material/styles';


export const GridContainer = styled.div`
    display: grid;
    height: calc(100vh - 45px);
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details"
        "Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details Selected-Event-Details"
        "List-Of-Events List-Of-Events List-Of-Events ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
        "List-Of-Events List-Of-Events List-Of-Events ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
        "List-Of-Events List-Of-Events List-Of-Events ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
        "List-Of-Events List-Of-Events List-Of-Events ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
        "List-Of-Events List-Of-Events List-Of-Events ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
        "List-Of-Events List-Of-Events List-Of-Events ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
        "List-Of-Events List-Of-Events List-Of-Events ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
        "List-Of-Events List-Of-Events List-Of-Events ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
        "List-Of-Events List-Of-Events List-Of-Events ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
        "List-Of-Events List-Of-Events List-Of-Events ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities";
    `

export const SelectedEventDetails = styled.div`
    grid-area: Selected-Event-Details;
`

export const ListOfEvents = styled.div`
    grid-area: List-Of-Events; 
`

export const ActivityDrop = styled.div`
    grid-area: ActivityDrop;
`

export const ListOfActivities = styled.div`
    grid-area: ListOfActivities;
`