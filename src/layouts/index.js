import React from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'

const Main = styled.main`
  padding: 1rem 2rem 4rem;

  @media (max-width: 720px) {
    padding: 1rem;
    padding-bottom: 4rem;
  }
`

export default ({ children, path }) => {
  return (
    <div
      style={{
        position: 'relative',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <Header path={path} />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
