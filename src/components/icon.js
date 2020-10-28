import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import logo from "../images/icons/linkedin-white.svg"

const Icon = ({alt, name, url}) => {

//     const data = graphql`
//     query {
//       file(relativePath: { eq: "icons/linkedin-white.svg" }) {
//         absolutePath
//       }
//     }
//   `

//   if (!data?.placeholderImage?.childImageSharp?.fluid) {
//     return <div>Picture  found</div>
//   }


    return(
        <a href={url} target="_blank" rel="noreferrer">
            <img src="icons/dribble-white.svg" alt={alt}/>
        </a>
        )
    
}


export default Icon