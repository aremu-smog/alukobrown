import React, { useEffect, useRef } from "react"

const Cursor = ({mouseColor}) => {
  const cursor = useRef()
  const cursorInner = useRef()
  useEffect(() => {
    cursorInner.current.style.backgroundColor = mouseColor
    cursor.current.style.borderColor = mouseColor
    document.addEventListener("mousemove", e => {
      cursor.current.style.top = (e.clientY - 16)+'px'
      cursorInner.current.style.top = (e.clientY - 5)+'px'
      cursor.current.style.left = (e.clientX - 16)+'px'
      cursorInner.current.style.left = (e.clientX - 5)+'px'
      
    })
  })

  return (
    <>
      <div className="cursor" ref={cursor}></div>
    <div className="cursorInner" ref={cursorInner}></div>
    </>
  
  )
}

export default Cursor
