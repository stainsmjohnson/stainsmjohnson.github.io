import React from 'react'
import { NavLink} from 'react-router-dom'
import "./style.css"

const Nav = () => {
    const options = [
        { id:1, name: 'Home', route: '/'},
        { id:2, name: 'Services', route: '/services'},
        { id:2, name: 'About Us', route: '/about'},
        { id:3, name: 'Contact us', route: '/contact'},
    ]
    return (
        <div id="nav">
            {options.map(option => (
                <NavLink key={option.id} to={option.route} exact activeClassName="link-active" className="link">
                    <div>{option.name}</div>
                </NavLink>
            ))}
        </div>
    )
}

export default Nav
