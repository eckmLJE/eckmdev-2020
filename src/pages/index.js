import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

export default () => (
  <>
    <SEO title="Home" />
    <h2>Home</h2>
    <div>
      <Link to="/portfolio">Portfolio</Link>
    </div>
    <div>
      <Link to="/skills">Skills</Link>
    </div>
  </>
)
