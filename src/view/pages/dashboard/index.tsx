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

// CUSTOME HOOKS
import { useDashboardHook } from './useDashboardHook';
import { useAssetHook } from '../../../hooks/useAssetHook';

// API IMPORT
import {GET_ALL_ASSETS} from '../../../api/constants';

// STYLE IMPORT
import './styles.css';

const DashboardPage = () => {
    // DECLARE STATE
    const [total, setTotal] = useState<AllAssetTotal>();
    const [isLoading, setLoading] = useState<boolean>(true);

    // CUSTOM HOOK
    const dashboardHook = useDashboardHook();
    const assetHook = useAssetHook();

    const getAssetList = async () => {
        try {
            const response = await fetch(GET_ALL_ASSETS);
            if (!response.ok) {
                throw new Error("Server error");
            }
            const result = await response.json();
            setTotal({
                crypto: (await assetHook.getCryptoPriceBySymbol(result)).total,
                currency: (await assetHook.getCurrencyByCode(result)).total,
                property: (await assetHook.getPropertyTotal(result)).total,
                stock: (await assetHook.getStockPriceBySymbol(result)).total,
            })

        } catch (error) {
            console.log("Error")
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
            <div className='block sm:flex flex-1 space-y-2 sm:space-y-0 sm:space-x-4 mb-3'>
                <div className='flex-1'>
                    <CounterWidget title="Crypto" icon={<i className="fa fa-btc symbol crypto-symbol" aria-hidden="true"></i>}  total={total?.crypto}/>
                </div>
                <div className='flex-1'>
                    <CounterWidget title="Stock" icon={<i className="fa fa-bar-chart symbol stock-symbol" aria-hidden="true"></i>}/>
                </div>
                <div className='flex-1'>
                    <CounterWidget title="Property" icon={<i className="fa fa-home symbol property-symbol" aria-hidden="true"></i>} total={total?.property}/>
                </div>
                <div className='flex-1'>
                    <CounterWidget title="Currency" icon={<i className="fa fa-usd symbol currency-symbol" aria-hidden="true"></i>} total={total?.currency}/>
                </div>
            </div>
            <div className='block sm:flex flex-1 space-y-3 sm:space-y-0 sm:space-x-4 mb-3 mt-5'>
                <div className='flex-1 chart-layout'>
                    <WidgetTitle title="Pie chart" subtitle='Asset details using pie chart and shown in percentage'/>
                    <div className='pie-chart-container w-full sm:w-[360px]'>
                        <Chart type="pie" data={dashboardHook.getPieChartData(total as AllAssetTotal)} options={dashboardHook.getPieChartOptions()}/>
                    </div>
                </div>
                <div className='flex-1 chart-layout space-y-3 sm:space-y-0 sm:space-x-4 mb-5'>
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