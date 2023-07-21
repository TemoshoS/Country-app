import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <div>
            <div className='nav-country'>
                <p className='world'>Where in the world?</p>
                <p className='dark-mode'><FontAwesomeIcon icon={faMoon} style={{ color: "#dfe0e1", }} /> Dark Mode</p>
            </div>

        </div>
    )
}

export default NavBar