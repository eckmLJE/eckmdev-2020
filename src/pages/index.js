import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Summary from '../components/summary'
import LucasSkateboard from '../components/images/lucas-skateboard-alley'

const LucasContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 2rem auto;
  overflow: hidden;
`

export default () => (
  <>
    <SEO title="Home" />
    <main>
      <Summary>
        Hello! I'm Lucas, a web developer, bicycle courier, and urban design
        consultant living and working in Washington, DC.
      </Summary>
      <LucasContainer>
        <LucasSkateboard />
      </LucasContainer>
      <Summary>
        When I'm not engineering delightful, performant and accessible web
        experiences, you can find me reading science fiction, playing video
        games, and riding my bicycle through red lights.
      </Summary>
    </main>
  </>
)
