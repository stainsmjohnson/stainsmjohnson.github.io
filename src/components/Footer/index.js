import React from 'react'
import "./style.css"
import {NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div id="footer">
            <div>
                <h2>More Links</h2>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">About us</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact">Contact us</NavLink>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer
