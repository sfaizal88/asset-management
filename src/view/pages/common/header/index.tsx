/**
 * Header component
 * @author - Faizal
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {Dispatch, SetStateAction} from 'react';

// IMAGE
import ProfileImage from '../../../../assests/img/profile.png';

// STYLE IMPORT
import './styles.css';

// COMPONENT PROPS
type HeaderProps = {
    setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const Header = ({
    setShowMobileMenu
}: HeaderProps) => (
    <header>
        <div className='flex flex-1 items-center'>
            <div className='flex-1 hidden sm:block'>Welcome back, <strong>Ahamed Faizal</strong></div>
            <div className='flex-1 block mobile-logo sm:hidden'>
                <i className="fa fa-bars cursor-pointe mr-1" aria-hidden="true" onClick={() => setShowMobileMenu(true)}></i>&nbsp;Teleskop
            </div>
            <div className='flex-1 flex justify-end'><img src={ProfileImage} width={26} alt="Profile img"/></div>
        </div>
    </header>
)

export default Header;