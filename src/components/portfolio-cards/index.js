import React from 'react'
import styled from 'styled-components'

import PortfolioCard from './portfolio-card'

const PortfolioCards = styled.section`
  position: relative;
  padding: 1rem 0;
  max-width: 700px;
  margin: 0 auto;

  * {
    color: unset;
    text-decoration: none;
  }
`

export default ({ content }) => {
  return (
    <PortfolioCards>
      {content.map((portfolioItem, i) => {
        return (
          <PortfolioCard key={`portfolio-item-${i}`} data={portfolioItem} />
        )
      })}
    </PortfolioCards>
  )
}
