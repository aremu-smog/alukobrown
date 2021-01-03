import React, { useEffect, useRef } from "react"
import LinkedInWhite from "../images/icons/linkedin-white.svg"
import InstagramWhite from "../images/icons/instagram-white.svg"
import TwitterWhite from "../images/icons/twitter-white.svg"
import DribbleWhite from "../images/icons/dribble-white.svg"

import { gsap, TimelineMax } from "gsap"

// gsap.registerPlugin(SplitText)

//Components

import Icon from "./icon"

const Landing = ({changeMouse}) => {
  const line = useRef(null)
  const intro = useRef(null)
  const info = useRef(null)
  const landing = useRef(null)
  useEffect(() => {
    const master = new TimelineMax()
    // const introText = SplitText(intro.current, {type:"words"})

    // console.log(introText)
    gsap.set(landing.current, { visibility: "visible" })

    master
      .from(intro.current.children, {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
      })
      .from(line.current, { width: 0, duration: 0.3 })
      .from(info.current, { x: -10, autoAlpha: 0 })
  }, [])
  return (
    <main onMouseOver={()=>changeMouse("#c0cac4")}>
      <article className="inner"></article>
      <section className="landing" ref={landing}>
        <article className="inner">
          <header>
            <h1 className="intro" ref={intro}>
              <span>Hi,</span> <span>I’m</span> <span>Aluko</span>{" "}
              <span>Brown</span>
            </h1>
          </header>
          <content className="row">
            <div className="inner-offset">
              <hr ref={line} />
            </div>
            <div ref={info}>
              <p>
              A Brand & Product Designer based in Lagos, Nigeria, with about 5 years experience designing tasteful experiences for brands, products & services.
              </p>
              <p>My work experience cuts across brand identity and communication design, product design and UI/UX, art direction and campaigns.
              </p>

              <p>I currently work on the Product team at <a href="https://www.quidax.com/" target="_blank" rel="noreferrer">Quidax</a>, also as a Design Partner at <a href="https://fourthcanvas.co/" target="_blank" rel="noreferrer">FourthCanvas</a> and I teach UX design at <a href="https://stutern.com/" target="_blank" rel="noreferrer">Stutern</a>.
              </p>

        
              <footer className="social-icons">
                <Icon
                  alt="LinkedIn"
                  icon={LinkedInWhite}
                  url="https://www.linkedin.com/in/aluko-brown/"
                />
                <Icon
                  alt="Twitter"
                  icon={TwitterWhite}
                  url="https://twitter.com/AlukoBrown"
                />
                <Icon
                  alt="Instagram"
                  icon={InstagramWhite}
                  url="https://www.instagram.com/alukobrown/"
                />
                <Icon
                  alt="Dribble"
                  icon={DribbleWhite}
                  url="https://dribbble.com/alukobrown"
                />
              </footer>
            </div>
          </content>
        </article>
      </section>
    </main>
  )
}

export default Landing
