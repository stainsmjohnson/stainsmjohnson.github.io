import React from 'react'
import './style.css'
import MapIcon from '@material-ui/icons/Map';

const HomeScreen = () => {
    return (
        <div>
            <h1 className="contact-heading">Contacts Screen</h1>
            <div className="address-container">
                    <p className="address-line">Active Plus Physical Therapy, PC.</p>
                    <p className="address-line">30900 Ford Road, Suite-G</p>
                    <p className="address-line">Garden City, MI-48135</p>
                    <p className="address-line">Phone: 734-306-2503</p>
                    <p className="address-line">Fax: 888-496-5550</p>
                    <p className="address-line">E-mail: activepluspt@gmail.com</p>
                    <p className="address-line">        
                        <a className="link-style" target="_blank" href="https://www.google.com/maps/place/30900+Ford+Rd,+Garden+City,+MI+48135,+USA/@42.3255087,-83.348112,17z/data=!3m1!4b1!4m5!3m4!1s0x883b4c8590c265a7:0x75853c2f1497489a!8m2!3d42.3255087!4d-83.345918?hl=en">
                        <MapIcon/>
                        <span >Location</span>
                        </a>
                    </p>
            </div>
        </div>
    )
}
export default HomeScreen