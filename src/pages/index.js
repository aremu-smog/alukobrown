import React,{useState, useRef, useEffect} from "react"
import {gsap} from 'gsap'
import "../components/style.scss"


import Landing from "../components/landing"
import Menu from "../components/menu"


import SEO from "../components/seo"

const IndexPage = () => {

    const [menu, setMenu] = useState(false)
    const [fill, setFill ] = useState("#C0CAC4")

    const menuRef = useRef(null)
    const toggleMenu = () => {
        if(menu){
            setFill("#C0CAC4")
        }else{
            setFill("#022C14")
        }

        setMenu(!menu)
    }

    useEffect(()=> {
        gsap.from(menuRef.current, {autoAlpha: 0, delay: 5, duration: 5, ease: 'linear'})
    }, [])
    return(
        <div>
        <SEO title="Home"/>
        <Menu ref={menuRef} fill={fill} toggleMenu={toggleMenu}/>
        <Landing />
    </div>
    )
    
    }

export default IndexPage
