import React from 'react'
import { GridContainer, SelectedEventDetails, ListOfActivities, ListOfEvents, ActivityDrop } from './styles'


function Home() {
  return (
    <GridContainer>
      <SelectedEventDetails />
      <ListOfActivities />
      <ListOfEvents />
      <ActivityDrop />
    </GridContainer>
  )
}

export default Home