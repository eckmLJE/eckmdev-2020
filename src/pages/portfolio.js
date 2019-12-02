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
        collaboration with UX and product teams in a top-talent and
        high-performance environment.
      </Summary>
      <PortfolioCards content={portfolioContent} />
    </main>
  </>
)
