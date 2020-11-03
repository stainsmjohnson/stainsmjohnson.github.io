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
            <div>
                <h2>Contact Information</h2>
                <ul>
                    <li>Active Plus Physical Therapy, PC.</li>
                    <li>30900 Ford Road, Suite-G</li>
                    <li>Garden City, MI-48135</li>
                    <li>Phone: 734-306-2503</li>
                    <li>Fax: 888-496-5550</li>
                    <li>E-mail: activepluspt@ gmail.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
