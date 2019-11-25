import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  a {
    position: relative;
    display: block;
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
  display: block;
  margin: 0;
  padding: 0.5rem 1rem;

  a {
    color: hsla(0, 0%, 0%, 0.7);
    transform: translateY(0);
    transition: 200ms all ease-out;

    &:hover {
      transform: translateY(-1px);
    }
  }

  ${({ active }) =>
    active &&
    css`
      a {
        color: black;
        cursor: default;

        &:hover {
          transform: translateY(0);
        }
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
        <NavItem active={path === '/skills/'}>
          <Link to="/skills">Skills</Link>
        </NavItem>
        <NavItem active={path === '/portfolio/'}>
          <Link to="/portfolio">Portfolio</Link>
        </NavItem>
      </NavList>
    </Nav>
  </Header>
)
