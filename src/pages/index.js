import React,{useState} from "react"
import Header from "../components/header"
import "../components/style.scss"


import Landing from "../components/landing"
import Menu from "../components/menu"


import SEO from "../components/seo"
import Cursor from "../components/cursor"

const IndexPage = () => {

    const [menu, setMenu] = useState(false)
    const [fill, setFill ] = useState("#C0CAC4")

    const toggleMenu = () => {
        if(menu){
            setFill("#C0CAC4")

        }else{
            setFill("#022C14")
        }
        setMenu(!menu)
    }


  
    return(
        <div>
        <SEO title="Home"/>
        <Cursor />
        <Header fill={fill} toggleMenu={toggleMenu} />
        <Menu  openMenu={menu}/>
        <Landing />
    </div>
    )
    
    }

export default IndexPage
