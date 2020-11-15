import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import CSSRulePlugin from 'gsap/CSSRulePlugin'
const Cursor = () => {
    const cursor = useRef()
    const follower = CSSRulePlugin.getRule(".cursor:after")

    
    useEffect(()=> {

        const return_int_of = (string) => {
            return typeof(string) === "string" ? parseInt(string, 10) : string

        }
        
        document.addEventListener("mousemove", (e)=> {
            const prev_top = return_int_of(cursor.current.style.top)
            const prev_left = return_int_of(cursor.current.style.left)

            const new_top = e.clientY
            const new_left = e.clientX

            //Change in Y position
            const d_top = new_top - prev_top

            // //Change in X position
            const d_left = new_left - prev_left

            // const angle = Math.round(Math.atan(d_left/d_top))

            // console.log(prev_left, new_left, d_left)
            cursor.current.style.top = `${e.clientY}px`
            cursor.current.style.left = `${e.clientX}px`
            // if(prev_top === new_top && prev_left === new_left){
            //     gsap.to(follower, {width: "30px", height: "30px", borderRadius: "50%", duration: 0.1})
            // }else{
            //     gsap.to(follower, {width: "50px", height: "30px", rotate: 30, borderRadius: "5px", duration: 0.1})

            // }
        })
    },)

    return (
        <div className="cursor" ref={cursor}></div>
    )
}

export default Cursor