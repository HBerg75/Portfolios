import React from 'react'
import avatar from '../img/avatar.jpg'
import { NavLink } from 'react-router-dom'
import{HashLink as Link} from 'react-router-hash-link'

function NavBar() {
    return (
        <div className="NavBar">

            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/home" exact>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact>
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            <footer className="footer">
                <p>
                    WEB@CADEMIE 2021
                </p>
            </footer>
            </nav>
        </div>
    )
}

export default NavBar
