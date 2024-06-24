/**
 * Dashboard Page component
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import {useEffect, useState} from 'react';

// COMMON COMPONENT
import { CounterWidget, WidgetTitle, Loader } from '../../atoms';

// UTILS
import type {AllAssetTotal} from '../../../utils/types';
import useNotification from '../../../utils/notification';

// CUSTOME HOOKS
import { useDashboardHook } from './useDashboardHook';
import { useAssetHook } from '../../../hooks/useAssetHook';

// STORAGE
import * as Storage from '../../../storage';

// API IMPORT
// import {GET_ALL_ASSETS} from '../../../api/constants';

// STYLE IMPORT
import './styles.css';

const DashboardPage = () => {
    // NOTIFICATION
    const setNotification = useNotification();

    // DECLARE STATE
    const [total, setTotal] = useState<AllAssetTotal>();
    const [isLoading, setLoading] = useState<boolean>(true);

    // CUSTOM HOOK
    const dashboardHook = useDashboardHook();
    const assetHook = useAssetHook();

    // GET ASSET LIST
    const getAssetList = async () => {
        try {
            /*const response = await fetch(GET_ALL_ASSETS);
            if (!response.ok) {
                throw new Error("Server error");
            }
            const result = await response.json();*/
            const result = Storage.fetchAllAsset();
            setTotal({
                crypto: (await assetHook.getCryptoPriceBySymbol(result)).total,
                currency: (await assetHook.getCurrencyByCode(result)).total,
                property: (await assetHook.getPropertyTotal(result)).total,
                stock: (await assetHook.getStockPriceBySymbol(result)).total,
            })

        } catch (error) {
            setNotification.error();
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAssetList();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (isLoading) return <Loader/>

    return (
        <>
            <div className='page-title'>Overview 👋</div>
            <div className='page-subtitle'>Let's see an overview of your assets</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                <CounterWidget title="Crypto" icon={<i className="fa fa-btc symbol crypto-symbol" aria-hidden="true"></i>}  total={total?.crypto}/>
                <CounterWidget title="Stock" icon={<i className="fa fa-bar-chart symbol stock-symbol" aria-hidden="true"></i>}/>
                <CounterWidget title="Property" icon={<i className="fa fa-home symbol property-symbol" aria-hidden="true"></i>} total={total?.property}/>
                <CounterWidget title="Currency" icon={<i className="fa fa-usd symbol currency-symbol" aria-hidden="true"></i>} total={total?.currency}/>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='chart-layout'>
                    <WidgetTitle title="Pie chart" subtitle='Asset details using pie chart and shown in percentage'/>
                    <div className='pie-chart-container w-full sm:w-[360px]'>
                        <Chart type="pie" data={dashboardHook.getPieChartData(total as AllAssetTotal)} options={dashboardHook.getPieChartOptions()}/>
                    </div>
                </div>
                <div className='chart-layout space-y-3 sm:space-y-0 sm:space-x-4 mb-5'>
                    <WidgetTitle title="Bar chart" subtitle='Asset details using bar chart and shown in value'/>
                    <div className='bar-chart-container mt-12 w-full sm:w-[450px]'>
                        <Chart type="bar" data={dashboardHook.getBarChartData(total as AllAssetTotal)} options={dashboardHook.getBarChartOptions()}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage;