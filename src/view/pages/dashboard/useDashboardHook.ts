/**
 * Custom Dashboard hook 
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT

// UTILS IMPORT
import type {AllAssetTotal} from '../../../utils/types';

export function useDashboardHook() {

    const getPieChartData = (totalData: AllAssetTotal) => {
        const pieChartData = {
            labels: ['Crypto', 'Stock', 'Property', 'Currency'],
            datasets: [
            {
                label: '# of Asset',
                data: [
                    totalData.crypto.currentMarketTotal, 
                    19, 
                    totalData.property.currentMarketTotal, 
                    totalData.currency.currentMarketTotal
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

    const getBarChartData = (totalData: AllAssetTotal) => {
        const barChartData = {
            labels: ['Crypto', 'Stock', 'Property', 'Currency'],
            datasets: [{
              label: 'All the Asset',
              data: [
                totalData.crypto.currentMarketTotal, 
                19, 
                totalData.property.currentMarketTotal, 
                totalData.currency.currentMarketTotal
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

