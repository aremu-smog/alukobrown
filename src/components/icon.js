import React from 'react'

const Icon = ({alt, icon, url}) => {

    return(
        <a href={url} target="_blank" rel="noreferrer">
            <img src={icon} alt={alt}/>
        </a>
        )
    
}


export default Icon