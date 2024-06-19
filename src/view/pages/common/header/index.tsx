/**
 * Header component
 * @author - Faizal
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import React from 'react';

// IMAGE
import ProfileImage from '../../../../assests/img/profile.png';

// STYLE IMPORT
import './styles.css';

const Header = () => (
    <header>
        <div className='flex flex-1 items-center'>
            <div className='flex-1 '>Welcome back, <strong>Ahamed Faizal</strong></div>
            <div className='flex-1 flex justify-end'><img src={ProfileImage} width={26} alt="Profile img"/></div>
        </div>
    </header>
)

export default Header;