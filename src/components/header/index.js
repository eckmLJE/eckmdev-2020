import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: hsla(0, 0%, 0%, 0.8);

    &:hover {
      color: black;
    }
  }
`

const Title = styled.h1`
  position: relative;
  font-weight: normal;
  margin: 0;
  padding: 0;
`
const Nav = styled.nav``
const NavList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`
const NavItem = styled.li`
  position: relative;
  margin: 0;
  padding: 1rem;
`

export default () => (
  <Header>
    <Link to="/">
      <Title>
        <strong>Lucas</strong> Eckman
      </Title>
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
