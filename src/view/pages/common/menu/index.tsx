/**
 * Menu component
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {useState, useEffect, Dispatch, SetStateAction} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// STYLE IMPORT
import './styles.css';

// COMPONENT PROPS
type MenuProps = {
    showMobileMenu: boolean;
    setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({
    showMobileMenu,
    setShowMobileMenu,
}: MenuProps) => {
    // LOCATION VAR
    const location = useLocation();

    // DECLARE STATE
    const [currentMenu, setCurrentMenu] = useState<string>(location.pathname);

    // DECLARE NAVIGATE
    const navigate = useNavigate();

    const gotoPage = (path: string) => {
        setShowMobileMenu(false);
        navigate(path);
    }

    const isMenuActive = (paths: string[]) => {
        if (paths.length) {
            return paths.some(item => {
                const sublinkPathName = item.split("/")[1];
                const currentMenuPathName = currentMenu.split("/")[1];
                return sublinkPathName === currentMenuPathName;
            })
        }
        return false;
    }

    useEffect(() => {
        setCurrentMenu(location.pathname);
    }, [currentMenu, location.pathname]);

    return (
        <div className={clsx('menu-container', !showMobileMenu && 'hidden')}>
            <div className='logo-container'>
                <i className="fa fa-bolt" aria-hidden="true"></i>&nbsp;Teleskop
                <i className="fa fa-times float-right sm:hidden pt-1" onClick={() => setShowMobileMenu(false)} aria-hidden="true"></i>
            </div>
            <ul className='menu-list'>
                <li className={clsx(isMenuActive([PATH.DASHBOARD_PATH]) && 'active-menu')}>
                    <div onClick={() => gotoPage(PATH.DASHBOARD_PATH)}>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>&nbsp;Dashboard
                    </div>
                </li>
                <li className={clsx(isMenuActive([PATH.ASSET_LISTING_PATH, PATH.ADD_ASSET_PATH, PATH.VIEW_ASSET_PATH]) && 'active-menu')}>
                    <div onClick={() => gotoPage(PATH.ASSET_LISTING_PATH)}>
                        <i className="fa fa-money" aria-hidden="true"></i>&nbsp;Asset
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Menu;