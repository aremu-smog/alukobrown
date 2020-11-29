import React, { useEffect, useRef } from "react"

const Cursor = () => {
  const cursor = useRef()
  useEffect(() => {
    document.addEventListener("mousemove", e => {
      cursor.current.style.top = `${e.clientY}px`
      cursor.current.style.left = `${e.clientX}px`
    })
  })

  return <div className="cursor" ref={cursor}></div>
}

export default Cursor
