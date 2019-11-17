import React from "react"
import styled from "styled-components"

import Header from "../components/header"
import Footer from "../components/footer"

const Main = styled.main``

export default ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
