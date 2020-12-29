import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
// import Aluko from "../images/AlukoBrown.png"

import { showOverlay, hideOverlay } from "./animate"

//Icons
import LinkedInGreen from "../images/icons/linkedin-green.svg"
import InstagramGreen from "../images/icons/instagram-green.svg"
import TwitterGreen from "../images/icons/twitter-green.svg"
import DribbleGreen from "../images/icons/dribble-green.svg"
import ArrowRight from "../images/icons/arrow-right.svg"

//Components

import Icon from "./icon"

const Menu = ({ openMenu, changeMouse }) => {
  const menuRef = useRef(null)
  const resumeRef = useRef(null)

  useEffect(() => {
    if (!openMenu) {
      hideOverlay(menuRef.current, resumeRef.current.children)
    } else {
      showOverlay(menuRef.current, resumeRef.current.children)
    }
  }, [openMenu])

  const data = useStaticQuery(graphql
    `query {
      allContentfulResume(sort: { fields: updatedAt, order: DESC }) {
        edges {
          node {
            id
            company
            role
            startDate
            endDate
          }
        }
      }

      contentfulProfileImage{
        picture{
          file{
            url
          }
        }
      }
    }`
    
  )

  const Aluko = data.contentfulProfileImage.picture.file.url

  const works = data.allContentfulResume.edges.map((resume, index) => (
    <article key={index} className="work row">
      <hr />
      <div>
        <h2>{resume.node.company}</h2>
        <p>
          {resume.node.role}
          <br />
          <small>
            {resume.node.startDate} - {resume.node.endDate}
          </small>
        </p>
      </div>
    </article>
  ))
  return (
    <div className="overlay-menu row" ref={menuRef} >
      <div className="menu_inner row" role="link" tabIndex="0" onMouseOver={()=>changeMouse("#022c14")} onFocus={()=>changeMouse("#022c14")}>
        <section className="profile">
          <div className="picture">
            <img src={Aluko} alt="Aluko Brown" />
          </div>

          <div className="contact">
            (+234) 803 354 9393 <br />
            alukoayomiposi@gmail.com
            <br />
            <span className="social-icons">
              <Icon
                alt="LinkedIn"
                icon={LinkedInGreen}
                url="https://www.linkedin.com/in/aluko-brown/"
              />
              <Icon
                alt="Twitter"
                icon={TwitterGreen}
                url="https://twitter.com/AlukoBrown"
              />
              <Icon
                alt="Instagram"
                icon={InstagramGreen}
                url="https://www.instagram.com/alukobrown/"
              />
              <Icon
                alt="Dribble"
                icon={DribbleGreen}
                url="https://dribbble.com/alukobrown"
              />
            </span>
            <p>
              <a
                href="https://drive.google.com/file/d/1kFRqgNI1SCUrv9PzmXNOrGYp9_Ug23Kt/view?usp=drivesdk"
                rel="noreferrer"
                className="row cv"
                target="_blank"
              >
                View my CV <img src={ArrowRight} alt="Arrow Right" />
              </a>
            </p>
          </div>
        </section>
        <nav className="resume" ref={resumeRef}>
          {works}
        </nav>
      </div>
      <div className="blank"  role="link"  tabIndex="0" onMouseOver={()=>changeMouse("#c0cac4")} onFocus={()=>changeMouse("#c0cac4")}></div>
    </div>
  )
}

export default Menu
