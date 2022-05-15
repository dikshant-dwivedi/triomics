import React from 'react'
import { Nav, NavLinkContainer, NavLink, Logo, LogoImage } from "./styles"

function NavBar() {
  return (
    <Nav>
      <NavLinkContainer>
        <NavLink to="/" >About</NavLink>
        <NavLink to="/" >Triomics</NavLink>
        {/*<NavLink to="/">
          <Logo>
            <LogoImage src="/images/triomics_black.png" alt="logo" />
          </Logo>
        </NavLink>*/}
        <NavLink to="/" >Contact us</NavLink>
      </NavLinkContainer>
    </Nav>
  )
}

export default NavBar