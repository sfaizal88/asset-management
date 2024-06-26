/**
 * Login page
 * @author - Faizal
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

// COMMON COMPONENTS
import {TextField} from '../../atoms';
import {FormAction} from '../../molecules';

// UTILS IMPORT
import type {LoginUser} from '../../../utils/types';
import {LOGIN_USER_DETAILS} from '../../../utils/constants';
import useNotification from '../../../utils/notification';

// ROUTER IMPORT
import * as PATH from '../../routes/constants';

// IMAGE IMPORT
import background from '../../../assests/icons/wave.svg';

// LOGIN IMPORT
import schema from './schema';

// STYLE IMPORT
import './styles.css';

const LoginPage = () => {
    // DECLARE NAVIGATE
    const navigate = useNavigate();

    // NOTIFICATION
    const setNotification = useNotification();

    // REACT HOOK FORM DECLARE
    const {control, handleSubmit, register, formState: { errors }, watch} = useForm<LoginUser>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });
    const formWatchData = watch();

    // LOGIN FUNCTION
    const onSubmit = (formData: LoginUser) => {
        if (formData.username === LOGIN_USER_DETAILS.username && formData.password === LOGIN_USER_DETAILS.password) {
            // ON SUCCESS, NAVIGATE TO DASHBOARD SCREEN
            navigate(PATH.DASHBOARD_PATH);
        } else {
            setNotification.error("Either username or password might be invalid.")
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit(onSubmit)()
        }
    };

    return (
        <div className="page-container" style={{ background: `url(${background}) no-repeat 0 100%` }}>
            <div className="login-container">
                <div className='login-title'>Welcome back</div>
                <div className='login-info'>Enter yours credentials to access your account.</div>
                <TextField
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    register={register}
                    control={control}
                    errors={errors?.username}
                    externalClassName='mb-2'
                    value={formWatchData.username}
                    handlerKeyDown={handleKeyPress}
                />
                <TextField
                    type='password'
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    register={register}
                    control={control}
                    errors={errors?.password}
                    externalClassName='mb-2'
                    value={formWatchData.password}
                    handlerKeyDown={handleKeyPress}
                />
                <FormAction
                    isFullWidth
                    showSubmit
                    submitBtnType={'button'}
                    submitLabel='Login'
                    onSubmit={handleSubmit(onSubmit)}
                />
            </div>
        </div>
    )
}

export default LoginPage;