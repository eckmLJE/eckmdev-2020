import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

export default () => (
  <>
    <SEO title="Portfolio" />
    <h2>Portfolio</h2>
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/skills">Skills</Link>
    </div>
  </>
)
