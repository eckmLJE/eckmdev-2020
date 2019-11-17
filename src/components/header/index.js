import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Nav = styled.nav``
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
`
const NavItem = styled.li`
  padding: 1rem;
`

export default () => (
  <Header>
    <Link to="/">
      <h1>eckm</h1>
    </Link>
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/skills">Skills</Link>
        </NavItem>
        <NavItem>
          <Link to="/portfolio">Portfolio</Link>
        </NavItem>
      </NavList>
    </Nav>
  </Header>
)
