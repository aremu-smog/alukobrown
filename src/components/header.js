import React from 'react'
import MenuIcon from "../images/icons/menu-icon.svg"

const Header = () => {
    return(
        <header className="main-header row">
                    <div class="inner-offset"></div>
                    <div><img src={MenuIcon} alt="Aluko Brown" id="menu-icon" className="menu-icon" /></div>
        </header>
    )
}

export default Header