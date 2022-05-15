import React from 'react'
import { SelectedEventDetails, ListOfActivities } from '../../components'
import { GridContainer, SelectedEventDetailsContainer, ListOfActivitiesContainer, ListOfEventsContainer, ActivityDropContainer, SideNavigationContainer } from './styles'


function Home() {
  return (
    <GridContainer>
      <SelectedEventDetailsContainer>
        <SelectedEventDetails />
      </SelectedEventDetailsContainer>
      <ListOfActivitiesContainer>
        <ListOfActivities />
      </ListOfActivitiesContainer>
      <ListOfEventsContainer></ListOfEventsContainer>
      <ActivityDropContainer></ActivityDropContainer>
      <SideNavigationContainer></SideNavigationContainer>
    </GridContainer>
  )
}

export default Home