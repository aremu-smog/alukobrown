import React from 'react'
import LinkedInWhite from "../images/icons/linkedin-white.svg"
import InstagramWhite from "../images/icons/instagram-white.svg"
import TwitterWhite from "../images/icons/twitter-white.svg"
import DribbleWhite from "../images/icons/dribble-white.svg"
import MenuIcon from "../images/icons/menu-icon.svg"

import Icon from './icon'

const Landing = ()=> {
    return(
        <main>
            <header className="main-header row inner">
                    <div class="inner-offset"></div>
                    <div><img src={MenuIcon} alt="Aluko Brown" id="menu-icon" className="menu-icon" /></div>
        </header>
        <section className="landing">

            <article className="inner">
              
                <header><h1 className="intro">Hi, I’m Aluko Brown</h1></header>
                <content className="row">
                    <div className="inner-offset"><hr/></div>
                    <div>
                        <p>I’m a Product Designer based in Lagos, Nigeria, with over 
5 years experience designing tasteful experiences for brands, products & services and a background in graphic & brand design.</p> 

<p>I currently work on the Product team at Quidax and teach 
UX design at Stutern.</p>
<footer class="social-icons">
    <Icon alt="LinkedIn" icon={LinkedInWhite} url="https://www.linkedin.com/in/aluko-brown/" />
    <Icon alt="Twitter" icon={TwitterWhite} url="https://twitter.com/AlukoBrown" />
    <Icon alt="Instagram" icon={InstagramWhite} url="https://www.instagram.com/alukobrown/" />
    <Icon alt="Dribble" icon={DribbleWhite} url="https://www.linkedin.com/in/aluko-brown/" />
    </footer>
</div>
                    
                </content>
                 
            </article>
           </section>
        </main>
        
    )
    
}

export default Landing