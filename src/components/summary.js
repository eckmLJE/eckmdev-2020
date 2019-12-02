import React from 'react'
import styled from 'styled-components'

const Summary = styled.p`
  margin: 0;
  font-size: 16px;
`

export default ({ children }) => <Summary>{children}</Summary>
