import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    height: 45px;
    background: ${({theme}) => theme.navBg};
    display: flex;
    justify-content: center;
`;

export const NavLinkContainer = styled.div`
  width: 35vw;
  min-width: 300px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    width: 100vw;
  }
`

export const NavLink = styled(Link)`
    display: flex;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: black;

    &:active {
        color: ${({theme}) => theme.linkColor};
    }
    &:hover {
        color: ${({theme}) => theme.linkColor};
    }
`

export const Logo = styled.div`
    width: 120px;
    overflow: hidden;
`

export const LogoImage = styled.img`
    height: 100%;
    width: 100%;
`