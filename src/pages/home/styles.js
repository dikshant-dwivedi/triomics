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
    "SideNavigation SideNavigation SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails"
    "SideNavigation SideNavigation SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails"
    "SideNavigation SideNavigation ListOfEvents ListOfEvents ListOfEvents ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
    "SideNavigation SideNavigation ListOfEvents ListOfEvents ListOfEvents ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
    "SideNavigation SideNavigation ListOfEvents ListOfEvents ListOfEvents ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
    "SideNavigation SideNavigation ListOfEvents ListOfEvents ListOfEvents ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
    "SideNavigation SideNavigation ListOfEvents ListOfEvents ListOfEvents ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
    "SideNavigation SideNavigation ListOfEvents ListOfEvents ListOfEvents ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
    "SideNavigation SideNavigation ListOfEvents ListOfEvents ListOfEvents ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
    "SideNavigation SideNavigation ListOfEvents ListOfEvents ListOfEvents ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
    "SideNavigation SideNavigation ListOfEvents ListOfEvents ListOfEvents ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"
    "SideNavigation SideNavigation ListOfEvents ListOfEvents ListOfEvents ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities"; 

    border: 1px solid black; 

    @media screen and (max-width: 1080px) {
        grid-template-areas: 
    "SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails"
    "SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails SelectedEventDetails"
    "ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents"
    "ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents"
    "ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents ListOfEvents"
    "ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities"
    "ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities"
    "ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities"
    "ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities"
    "ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities"
    "ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities"
    "ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ActivityDrop ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities ListOfActivities"; 
    
    height: 180vh;
    }
`

export const SelectedEventDetailsContainer = styled.div`
    grid-area: SelectedEventDetails;
    border: 1px solid black; 
`

export const ListOfEventsContainer = styled.div`
    grid-area: ListOfEvents; 
    border: 1px solid black; 
`

export const ActivityDropContainer = styled.div`
    grid-area: ActivityDrop;
    border: 1px solid black; 
`

export const ListOfActivitiesContainer = styled.div`
    grid-area: ListOfActivities;
    border: 1px solid black; 
`

export const SideNavigationContainer = styled.div`
    grid-area: SideNavigation;
    border: 1px solid black; 
        @media screen and (max-width: 1080px){
        display: none;
    }
`