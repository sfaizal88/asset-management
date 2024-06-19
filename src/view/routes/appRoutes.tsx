/**
 * 
 * App Routes
 * @author - Faizal 
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT
import { Route, Routes } from 'react-router-dom';

// ROUTER IMPORT
import './styles.css';
import * as PATH from './constants';

// COMMON IMPORT 
import Header from '../pages/common/header';
import Footer from '../pages/common/footer';
import Menu from '../pages/common/menu';
import NoPage from '../pages/common/error/noPage';

// PAGE IMPORT
import DashboardPage from '../pages/dashboard';
import AssetPage from '../pages/asset';
import AddAssetPage from '../pages/asset/components/addAsset';
import ViewAssetPage from '../pages/asset/components/viewAsset';

const AppRoutes = () => {
    // RENDER HTML
    return (
        <div className="app-layout">
            <div className="left-layout">
                <Menu/>
            </div>
            <div className="right-layout">
                <Header/>
                <div className="body-content">
                    <Routes>
                        <Route path={PATH.DASHBOARD_PATH} element={<DashboardPage />}/>
                        <Route path={PATH.ASSET_LISTING_PATH} element={<AssetPage />}/>
                        <Route path={`${PATH.ADD_ASSET_PATH}/:id?`} element={<AddAssetPage />}/>
                        <Route path={`${PATH.VIEW_ASSET_PATH}/:id`} element={<ViewAssetPage />}/>
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default AppRoutes;

// <Route path="*" element={<NoPage />} />