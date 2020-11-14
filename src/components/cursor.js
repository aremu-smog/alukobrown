import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import CSSRulePlugin from 'gsap/CSSRulePlugin'
const Cursor = () => {
    const cursor = useRef()
    const follower = CSSRulePlugin.getRule(".cursor::after")
    useEffect(()=> {
        document.addEventListener("mousemove", (e)=> {
            const prev_top = cursor.current.style.top
            const prev_left = cursor.current.style.left

            const new_top = `${e.clientY}px`
            const new_left = `${e.clientX}px`
            if(prev_top == new_top && prev_left == new_left){
                gsap.to(follower, {width: "30px", height: "30px", borderRadius: "50%", duration: 0.3})
            }else{
                gsap.to(follower, {width: "50px", height: "30px", borderRadius: "5px", duration: 0.3})

            }
            cursor.current.style.top = `${e.clientY}px`
            cursor.current.style.left = `${e.clientX}px`
        })
    },)
    return (
        <div className="cursor" ref={cursor}></div>
    )
}

export default Cursor