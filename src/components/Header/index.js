import React from 'react'
import './style.css'
import {Facebook, Phone,Print as Fax, Email} from '@material-ui/icons';

const Header = () => {
    return (
        <div id="header">
            <div>
                <span className="logo-name">Active plus Physical Therapy, PC.</span>
                <div className="address-left">
                    <span>30900 Ford Road, Suite-G</span>
                    <span>Garden City, MI-48135</span> 
                </div>
            </div>
            <div style={{
                flex:1, 
                display:'flex', 
                alignItems:'flex-end', 
                flexDirection: 'column',
                justifyContent:'space-around'
                }}>
                <div>
                    <div className="icon-text-container">
                        <a className="link-style header-link" target="_blank" href="https://www.facebook.com/karthy30900/">
                            <Facebook className="icon-style"/>
                            <span>facebook.com/karthy30900</span>
                        </a>
                    </div>
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
