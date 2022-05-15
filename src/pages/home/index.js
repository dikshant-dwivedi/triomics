import React from 'react'
import { SelectedEventDetails, ListOfActivities, ListOfEvents, ActivityDrop } from '../../components'
import { GridContainer, SelectedEventDetailsContainer, ListOfActivitiesContainer, ListOfEventsContainer, ActivityDropContainer, SideNavigationContainer } from './styles'
import { ContextWrapper } from './../../AppContext';

function Home() {
  return (
    <GridContainer>
      <ContextWrapper>
        <SelectedEventDetailsContainer>
          <SelectedEventDetails />
        </SelectedEventDetailsContainer>
        <ListOfActivitiesContainer>
          <ListOfActivities />
        </ListOfActivitiesContainer>
        <ListOfEventsContainer>
          <ListOfEvents />
        </ListOfEventsContainer>
        <ActivityDropContainer>
          <ActivityDrop />
        </ActivityDropContainer>
        <SideNavigationContainer></SideNavigationContainer>
      </ContextWrapper>
    </GridContainer>
  )
}

export default Home