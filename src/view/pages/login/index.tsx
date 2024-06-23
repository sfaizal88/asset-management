/**
 * Login page
 * @author - Faizal
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

// COMMON COMPONENTS
import {TextField} from '../../atoms';
import {FormAction} from '../../molecules';

// UTILS IMPORT
import type {LoginUser} from '../../../utils/types';
import {LoginUserDetails} from '../../../utils/constants';
import useNotification from '../../../utils/notification';

// ROUTER IMPORT
import * as PATH from '../../routes/constants';

// IMAGE IMPORT
import background from '../../../assests/icons/wave.svg';

// STYLE IMPORT
import './styles.css';

const LoginPage = () => {
    // DECLARE STATE
    const [loginUser, setLoginUser] = useState<LoginUser>({} as LoginUser);

    // DECLARE NAVIGATE
    const navigate = useNavigate();

    // NOTIFICATION
    const setNotification = useNotification();

    const handleChange = (event: any) => {
        setLoginUser({...loginUser, [event.target.name]: event.target.value?.trim()});
    };

    // LOGIN FUNCTION
    const handleSubmit = () => {
        console.log(loginUser);
        console.log(LoginUserDetails);
        if (loginUser.username === LoginUserDetails.username && loginUser.password === LoginUserDetails.password) {
            // ON SUCCESS, NAVIGATE TO DASHBOARD SCREEN
            navigate(PATH.DASHBOARD_PATH);
        } else {
            setNotification.error("Either username or password might be invalid.")
        }
        
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
                    value={loginUser.username}
                    onChangeHandler={handleChange}
                />
                <TextField
                    type='password'
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={loginUser.password}
                    onChangeHandler={handleChange}
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