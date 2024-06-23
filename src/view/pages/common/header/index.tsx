/**
 * Header component
 * @author - Faizal
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {Dispatch, SetStateAction} from 'react';
import {useNavigate} from 'react-router-dom';

// IMAGE
import ProfileImage from '../../../../assests/img/profile.png';
import ShutdownImage from '../../../../assests/img/shutdown.png';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// STYLE IMPORT
import './styles.css';

// COMPONENT PROPS
type HeaderProps = {
    setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const Header = ({
    setShowMobileMenu
}: HeaderProps) => {
    // DECLARE NAVIGATE
    const navigate = useNavigate();

    return (
        <header>
            <div className='flex flex-1 items-center'>
                <div className='flex-1 hidden sm:block'>Welcome back, <strong>Ahamed Faizal</strong></div>
                <div className='flex-1 block mobile-logo sm:hidden'>
                    <i className="fa fa-bars cursor-pointe mr-1" aria-hidden="true" onClick={() => setShowMobileMenu(true)}></i>&nbsp;Teleskop
                </div>
                <div className='flex-1 flex justify-end gap-2'>
                    <img src={ProfileImage} width={26} alt="Profile img" className='cursor-pointer'/>
                    <img src={ShutdownImage} width={26} alt="Logout" className='cursor-pointer' onClick={() => navigate(PATH.LOGIN_PATH)}/>
                </div>
            </div>
        </header>
    )
}

export default Header;