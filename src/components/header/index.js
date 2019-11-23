import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

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
  font-weight: 300;
  margin: 0;
  padding: 0;

  strong {
    font-weight: 900;
  }
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
  padding: 0.5rem 1rem;

  a {
    border-bottom: 2px solid transparent;
    transition: 300ms all ease-out;

    &:hover {
      border-color: black;
    }
  }

  ${({ active }) =>
    active &&
    css`
      a {
        border-color: black;
      }
    `}
`

export default ({ path }) => (
  <Header>
    <Link to="/">
      <Title>
        <strong>Lucas</strong> Eckman
      </Title>
    </Link>
    <Nav>
      <NavList>
        <NavItem active={path === "/skills/"}>
          <Link to="/skills">Skills</Link>
        </NavItem>
        <NavItem active={path === "/portfolio/"}>
          <Link to="/portfolio">Portfolio</Link>
        </NavItem>
      </NavList>
    </Nav>
  </Header>
)
