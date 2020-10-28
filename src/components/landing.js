import React from 'react'
import Icon from './icon'

const Landing = ()=> {
    return(
        <main>
            <header className="main-header row inner">
                    <div class="inner-offset"></div>
                    <div>Menu Icon</div>
        </header>
        <section className="landing">

            <article className="inner">
              
                <header><h1 class="intro">Hi, I’m Aluko Brown</h1></header>
                <content class="row">
                    <div class="inner-offset"><hr/></div>
                    <div>
                        <p>I’m a Product Designer based in Lagos, Nigeria, with over 
5 years experience designing tasteful experiences for brands, products & services and a background in graphic & brand design.</p> 

<p>I currently work on the Product team at Quidax and teach 
UX design at Stutern.</p>
<footer><Icon alt="LinkedIn" name="./images/icons/linkedin-white.svg" url="https://www.linkedin.com/in/aluko-brown/" /></footer>
</div>
                    
                </content>
                 
            </article>
           </section>
        </main>
        
    )
    
}

export default Landing