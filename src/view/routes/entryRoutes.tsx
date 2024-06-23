/**
 * 
 * Entry Routes
 * @author - Faizal 
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ROUTER IMPORT
import AppRoutes from './appRoutes';
import * as PATH from './constants';

// COMPONENT
import LoginPage from '../pages/login';

// ENTRY ROUTER VARIABLE DECLARE
const EntryRoutes = () => (
  <BrowserRouter basename="/asset-management">
    <Routes>
      <Route path={PATH.LOGIN_PATH} element={<LoginPage />}/>
      <Route path={PATH.OTHER_PATH} element={<AppRoutes />}/>
    </Routes>
  </BrowserRouter>
);

// EXPORT COMPONENT
export default EntryRoutes;
