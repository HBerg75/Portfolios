import React from 'react'
import {faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
function HomePage(){
    return(
        <div id="home" className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    weshhhhhhhh
                    <span>lorem Ipsum</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis architecto nemo suscipit. Necessitatibus amet quaerat unde repellat. Nulla amet sunt maiores similique repellendus suscipit in quasi eveniet illo eaque.
                </p>
                <div className="icons">
                    {/* <Link className='icon-holder'>
                    <FontAwesomeIcon icon={faFacebook} className="icon fb " />
                    </Link>
                    <Link className='icon-holder'>
                    <FontAwesomeIcon icon={faInstagram} className="icon inst" />
                    </Link> */}
                    <a href="https://github.com/HBerg75?tab=repositories" target="_blank" className='icon-holder'>
                    <FontAwesomeIcon icon={faGithub} className="icon git" />
                    </a>
                    <a href="https://www.linkedin.com/in/yanis-benhagouga-50782120a/" target="_blank" className='icon-holder'>
                    <FontAwesomeIcon icon={faLinkedin} className="icon link" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage; 