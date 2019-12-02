import React from 'react'
import styled from 'styled-components'
import linkedin from '../../images/In-Black-66px-R.png'
import github from '../../images/GitHub-Mark-64px.png'

const Nav = styled.nav`
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-top: solid 1px silver; */
  box-shadow: 0px 5px 35px -8px #ddd;
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

const NavItem = styled.li`
  margin: 0;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: darkred;
  }

  a {
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  img {
    transition: all 200ms ease-out;
    width: 2rem;
    opacity: 0.75;
  }

  img:hover {
    opacity: 1;
  }
`

export default () => (
  <Nav>
    <NavList>
      <NavItem>
        <a
          href="https://www.linkedin.com/in/lucaseckman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </NavItem>
      <NavItem>
        <a
          href="https://github.com/eckmLJE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>
      </NavItem>
    </NavList>
  </Nav>
)
