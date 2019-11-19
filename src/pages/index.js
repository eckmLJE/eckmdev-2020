import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Summary from "../components/summary"
import LucasSkateboard from "../components/images/lucas-skateboard-alley"

const LucasContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 2rem auto;
  overflow: hidden;
`

export default () => (
  <>
    <SEO title="Home" />
    <Summary>
      Hello! I'm Lucas, a web developer, bicycle courier, and urban design
      consultant living and working in Washington, DC.
    </Summary>
    <LucasContainer>
      <LucasSkateboard />
    </LucasContainer>
    <Summary>
      When I'm not building delightful user interfaces to spec, you can find me
      reading science fiction, playing video games, and riding my bicycle
      through red lights.
    </Summary>
  </>
)
