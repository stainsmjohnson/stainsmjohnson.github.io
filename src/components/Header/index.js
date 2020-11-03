import React from 'react'
import './style.css'
import {Facebook, Instagram, Twitter, Phone,Print as Fax, Email} from '@material-ui/icons';

const Header = () => {
    return (
        <div id="header">
            <div>
                <span className="logo-name">Active plus Physical Therapy</span>
            </div>
            <div style={{width: '40%', display:'flex', alignItems:'flex-end', flexDirection: 'column',justifyContent:'space-around'}}>
                <div className="social-link-container">
                    <Facebook className="icon-style"/>
                    <Instagram className="icon-style"/>
                    <Twitter className="icon-style"/>
                </div>
                <div>
                    <div className="icon-text-container">
                        <Phone className="icon-style"/>
                        <span>734-306-2503</span>
                    </div>
                    <div className="icon-text-container">
                        <Fax className="icon-style"/>
                        <span>888-496-5550</span>
                    </div>
                    <div className="icon-text-container">
                        <Email className="icon-style"/>
                        <span>activepluspt@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
