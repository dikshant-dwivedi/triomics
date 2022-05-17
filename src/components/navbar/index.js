import { useState, useContext } from 'react'
import { Nav, NavLinkContainer, NavLink, DummyDataButton } from "./styles"
import { events as eventsDummy } from "./../../dummy/events"
import { activities as activitiesDummy } from "./../../dummy/activities"
import { AppContext } from './../../AppContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function NavBar() {

  const { actions } = useContext(AppContext);
  const [alert, setAlert] = useState(false)

  const fillDummyData = (e) => {
    e.preventDefault()
    actions.setEvents(eventsDummy)
    let activityData = activitiesDummy.map(e => ({ ...e, id: e.id.toString() }))
    actions.setActivities(activityData)
    setAlert(true)
  }

  return (
    <Nav>
      <Snackbar open={alert} autoHideDuration={6000} onClose={() => setAlert(false)}>
        <Alert onClose={() => setAlert(false)} severity="success" sx={{ width: '100%' }} variant="filled">
          Application filled with dummy activities and events!
        </Alert>
      </Snackbar>
      <NavLinkContainer>
        <NavLink to="/" >Triomics</NavLink>
        {/*<NavLink to="/">
          <Logo>
            <LogoImage src="/images/triomics_black.png" alt="logo" />
          </Logo>
        </NavLink>*/}
        <DummyDataButton variant='contained' onClick={fillDummyData}>Fill Application with dummy data</DummyDataButton>
      </NavLinkContainer>
    </Nav>
  )
}

export default NavBar