/**
 * Dashboard Page component
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

// COMMON COMPONENT
import { CounterWidget } from '../../atoms';

// UTILS
import { convertToCurrency } from '../../../utils';

// CUSTOME HOOKS
import { useDashboardHook } from './useDashboardHook';

// STYLE IMPORT
import './styles.css';

const DashboardPage = () => {
    const dashboardHook = useDashboardHook();
    return (
        <>
            <div className='page-title'>Overview 👋</div>
            <div className='page-subtitle'>Let's see an overview of your assets</div>
            <div className='flex flex-1 space-x-4 mb-3'>
                <div className='flex-1'>
                    <CounterWidget title="Crypto" count={convertToCurrency("6789" || 0)} icon={<i className="fa fa-btc symbol crypto-symbol" aria-hidden="true"></i>}/>
                </div>
                <div className='flex-1'>
                    <CounterWidget title="Stock" count={convertToCurrency("6789" || 0)} icon={<i className="fa fa-bar-chart symbol stock-symbol" aria-hidden="true"></i>}/>
                </div>
                <div className='flex-1'>
                    <CounterWidget title="Property" count={convertToCurrency("6789" || 0)} icon={<i className="fa fa-home symbol property-symbol" aria-hidden="true"></i>}/>
                </div>
                <div className='flex-1'>
                    <CounterWidget title="Currency" count={convertToCurrency("6789" || 0)} icon={<i className="fa fa-usd symbol currency-symbol" aria-hidden="true"></i>}/>
                </div>
            </div>
            <div className='flex flex-1 space-x-4 mb-3 mt-5'>
                <div className='flex-1 text-center'>
                    <div className='pie-chart-container'>
                        <Chart type="pie" data={dashboardHook.getPieChartData()} options={dashboardHook.getPieChartOptions()}/>
                    </div>
                </div>
                <div className='flex-1'>
                <Chart type="bar" data={dashboardHook.getBarChartData()} options={dashboardHook.getBarChartOptions()}/>
                </div>
            </div>
        </>
    )
}

export default DashboardPage;