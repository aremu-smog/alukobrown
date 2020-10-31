import React from "react"
import "../components/style.scss"


import Landing from "../components/landing"
import Menu from "../components/menu"


import SEO from "../components/seo"

const IndexPage = () => (
    <div>
        <SEO title="Home"/>
        <Menu />
        <Landing />
    </div>
)

export default IndexPage
