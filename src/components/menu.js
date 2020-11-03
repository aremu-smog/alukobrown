import React from 'react'
import Aluko from "../images/AlukoBrown.png"

//Icons
import LinkedInGreen from "../images/icons/linkedin-green.svg"
import InstagramGreen from "../images/icons/instagram-green.svg"
import TwitterGreen from "../images/icons/twitter-green.svg"
import DribbleGreen from "../images/icons/dribble-green.svg"
import ArrowRight from "../images/icons/arrow-right.svg"


//Components
import Header from "./header"
import Icon from './icon'

const Menu = () => {
    return(
        <div className="overlay-menu row">
            
            <section className="profile">
                <div className="picture">
                    <img src={Aluko} alt="Aluko Brown" />
                </div>

                <div className="contact">
                    (+234) 803 354 9393 <br/>
                    alukoayomiposi@gmail.com<br/>
                    <span className="social-icons"><Icon alt="LinkedIn" icon={LinkedInGreen} url="https://www.linkedin.com/in/aluko-brown/" />
                    <Icon alt="Twitter" icon={TwitterGreen} url="https://twitter.com/AlukoBrown" />
                    <Icon alt="Instagram" icon={InstagramGreen} url="https://www.instagram.com/alukobrown/" />
                    <Icon alt="Dribble" icon={DribbleGreen} url="https://www.linkedin.com/in/aluko-brown/" /></span>
                    
                   
                    <p><a href="" className="row cv" target="_blank">View my CV <img src={ArrowRight} alt="Arrow Right" /></a></p>
                </div>
               
            </section>
            <nav className="resume">
                <Header />

                <article className="work row">
                    
                        <hr/>
                    <div>
                        <h2>Quidax</h2>
                        <p>Senior Product Designer<br/>
                        <small>October 2020 - Present</small>
                        </p>
                    </div>
                    
                </article>

                
            </nav>
            <section className="blank">

            </section>

        </div>
    )
}

export default Menu