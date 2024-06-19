/**
 * Login page
 * @author - Faizal
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {useNavigate} from 'react-router-dom';

// COMMON COMPONENTS
import {TextField} from '../../atoms';
import {FormAction} from '../../molecules';

// ROUTER IMPORT
import * as PATH from '../../routes/constants';

// IMAGE IMPORT
import background from '../../../assests/icons/wave.svg';

// STYLE IMPORT
import './styles.css';

const LoginPage = () => {
    // DECLARE NAVIGATE
    const navigate = useNavigate();

    // LOGIN FUNCTION
    const handleSubmit = () => {
        // ON SUCCESS, NAVIGATE TO DASHBOARD SCREEN
        navigate(PATH.DASHBOARD_PATH);
    }
    return (
        <div className="page-container" style={{ background: `url(${background}) no-repeat 0 100%` }}>
            <div className="login-container">
                <div className='login-title'>Welcome back</div>
                <div className='login-info'>Enter yours credentials to access your account.</div>
                <TextField
                    id="username"
                    name="username"
                    placeholder="Enter username"
                />
                <TextField
                    type='password'
                    id="password"
                    name="password"
                    placeholder="Enter password"
                />
                <FormAction
                    isFullWidth
                    showSubmit
                    submitBtnType={'button'}
                    submitLabel='Login'
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default LoginPage;