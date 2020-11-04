import React,{useState, useRef, useEffect} from "react"
import {gsap} from 'gsap'
import "../components/style.scss"


import Landing from "../components/landing"
import Menu from "../components/menu"
import {rollIcon, rollOut} from '../components/animate'


import SEO from "../components/seo"

const IndexPage = () => {

    const [menu, setMenu] = useState(false)
    const [fill, setFill ] = useState("#C0CAC4")

    const icon = useRef()
    useEffect(()=> {
      rollIcon(icon.current)  
    },[])

    const menuRef = useRef(null)
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
        <header className="main-header row">
                    <div className="inner-offset"></div>
                    <div><svg width="45" height="45" onClick={toggleMenu} ref={icon} onMouseEnter={()=> rollIcon(icon.current)} onMouseLeave={()=> rollOut(icon.current)} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM23.6424 32.8032C23.4933 29.9331 23.4086 27.2564 23.3885 24.6059C25.226 26.5115 27.0564 28.4615 28.9777 30.5933L30.5933 28.9777C28.4607 27.0558 26.5101 25.2248 24.6236 23.367C27.2754 23.3878 29.9533 23.4775 32.8248 23.6639L32.8248 21.336C29.9476 21.4855 27.2648 21.5702 24.6078 21.6181C26.4998 19.7555 28.4589 17.9232 30.6237 16.0223L28.9777 14.3762C27.0565 16.5079 25.2262 18.4579 23.3887 20.3634C23.4092 17.7133 23.4938 15.0134 23.6424 12.1536H21.3576C21.5065 15.0204 21.5911 17.7264 21.6392 20.3827C19.7725 18.4876 17.9164 16.5117 15.9918 14.3762L14.3762 15.9918C16.5109 17.9157 18.4862 19.7713 20.4004 21.6176C17.7453 21.5695 15.0406 21.4849 12.1752 21.336V23.6639C15.0348 23.4782 17.7346 23.3885 20.3845 23.3672C18.4753 25.2085 16.505 27.0591 14.3762 28.9777L16.0223 30.6238C17.9206 28.4618 19.7734 26.4822 21.6397 24.5864C21.5917 27.2433 21.507 29.9261 21.3576 32.8032H23.6424Z" fill={fill} />
</svg></div>
        </header>
        <Menu  openMenu={menu}/>
        <Landing />
    </div>
    )
    
    }

export default IndexPage
