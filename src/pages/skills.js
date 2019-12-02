import React from 'react'
import SEO from '../components/seo'

import Summary from '../components/summary'
import SkillCards from '../components/skill-cards'
import skills from '../content/skills'

export default () => (
  <>
    <SEO title="Skills" />
    <main>
      <Summary>
        I'm a JavaScript engineer with a front end focus, possessing strong web
        fundamentals: ES6, semantic and accessible HTML, and advanced CSS. I
        prefer React and Server-Side Rendered React frameworks like Next and
        Gatsby.
      </Summary>
      <SkillCards skills={skills} />
    </main>
  </>
)
