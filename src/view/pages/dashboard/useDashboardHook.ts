/**
 * Custom Dashboard hook 
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT

// UTILS IMPORT
import type {AllAssetTotal} from '../../../utils/types';

export function useDashboardHook() {

    // PIE CHART CODE
    const getPieChartData = (totalData: AllAssetTotal) => {
        const pieChartData = {
            labels: ['Crypto', 'Stock', 'Property', 'Currency'],
            datasets: [
            {
                label: '# of Asset',
                data: [
                    totalData?.crypto.currentMarketTotal || 0, 
                    19, 
                    totalData?.property.currentMarketTotal || 0, 
                    totalData?.currency.currentMarketTotal || 0
                  ],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderWidth: 1,
            },
            ],
        };
        return pieChartData;
    }

    // PIE CHART OPTIONS FOR THE COMPONENT
    const getPieChartOptions = () => {
        return {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "bottom" as const, // This positions the legend at the bottom
                }
            }
        }
    }

    // BAR CHART OPTION FOR THE COMPONENT
    const getBarChartOptions = () => {
        return {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "bottom" as const, // This positions the legend at the bottom
                }
            },
            scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    display: false,
                  },
                },
                x: {
                    grid: {
                      display: false,
                    },
                },
                
            }
        }
    }

    // BAR CHART CODE
    const getBarChartData = (totalData: AllAssetTotal) => {
        const barChartData = {
            labels: ['Crypto', 'Stock', 'Property', 'Currency'],
            datasets: [{
              label: 'All the Asset',
              data: [
                totalData?.crypto.currentMarketTotal || 0, 
                19, 
                totalData?.property.currentMarketTotal || 0, 
                totalData?.currency.currentMarketTotal || 0
              ],
              backgroundColor: [
                'rgba(255, 206, 86, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)',
            ],
              borderColor: [
                'rgba(255, 206, 86, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ],
              borderWidth: 1
            }]
        };
        return barChartData;
    }
    return {
        getPieChartData,
        getPieChartOptions,
        getBarChartOptions,
        getBarChartData
    }
}

