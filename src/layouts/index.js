import React from "react"
import styled from "styled-components"

import Header from "../components/header"
// import Footer from "../components/footer"

const Main = styled.main`
  padding: 2rem;

  @media (max-width: 720px) {
    padding: 1rem;
  }
`

export default ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <Header />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </div>
  )
}
