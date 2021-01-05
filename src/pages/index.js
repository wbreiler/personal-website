import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2">Go to page 2</Link>
    <p><Link to="/404">Go to 404 page</Link></p>
    <p>GitHub: <a href="https://github.com/wbreiler" target="_blank">@wbreiler</a></p>
    <p>GitLab: <a href="https://gitlab.com/wbreiler" target="_blank">@wbreiler</a></p>
  </div>
)

export default IndexPage