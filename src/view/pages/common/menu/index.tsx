/**
 * Menu component
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {useNavigate} from 'react-router-dom';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// STYLE IMPORT
import './styles.css';

const Menu = () => {
    // DECLARE NAVIGATE
    const navigate = useNavigate();

    const gotoPage = (path: string) => {
        navigate(path);
    }
    return (
        <div className='menu-container'>
            <div className='logo-container'><i className="fa fa-bolt" aria-hidden="true"></i>&nbsp;Teleskop</div>
            <ul className='menu-list'>
                <li className='active-menu'>
                    <div onClick={() => gotoPage(PATH.DASHBOARD_PATH)}>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>&nbsp;Dashboard
                    </div>
                </li>
                <li>
                    <div onClick={() => gotoPage(PATH.ASSET_LISTING_PATH)}>
                        <i className="fa fa-money" aria-hidden="true"></i>&nbsp;Asset
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Menu;