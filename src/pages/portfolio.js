import React from 'react'
import SEO from '../components/seo'

import Summary from '../components/summary'
import PortfolioCards from '../components/portfolio-cards'
import portfolioContent from '../content/portfolio'

export default () => (
  <>
    <SEO title="Portfolio" />
    <main>
      <Summary>
        Highlighting first-class web products and experiences built in close
        collaboration with UX and product team in a top-talent and
        high-performance atmosphere.
      </Summary>
      <PortfolioCards content={portfolioContent} />
    </main>
  </>
)
