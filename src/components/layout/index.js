import React from "react"
import styled from "styled-components"
import Header from "../header"
import Footer from "../footer"

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
