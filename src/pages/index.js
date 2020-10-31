import React from "react"
import "../components/style.scss"
import Landing from "../components/landing"


import SEO from "../components/seo"

const IndexPage = () => (
    <div>
        <SEO title="Home"/>
        <Landing />
    </div>
)

export default IndexPage
