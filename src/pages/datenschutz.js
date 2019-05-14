import React from "react"
import { Link } from "gatsby"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <StandardLayout>
    <SEO title="Datenschutz" />
    <h1>Datenschutz</h1>
    <p>Fülltext</p>
    <Link to="/">Zurück zur Startseite</Link>
  </StandardLayout>
)

export default SecondPage