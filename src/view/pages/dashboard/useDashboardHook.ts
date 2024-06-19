/**
 * Custom Dashboard hook 
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT

// UTILS IMPORT
import type {AssetType} from '../../../utils/types';
import {AssetEnum} from '../../../utils/enum';

export function useDashboardHook() {

    const getPieChartData = () => {
        const pieChartData = {
            labels: ['Crypto', 'Stock', 'Property', 'Currency'],
            datasets: [
            {
                label: '# of Asset',
                data: [12, 19, 3, 5, 2],
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
        }
    }

    const getBarChartOptions = () => {
        return {
            responsive: true,
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

    const getBarChartData = () => {
        const barChartData = {
            labels: ['Crypto', 'Stock', 'Property', 'Currency'],
            datasets: [{
              label: 'All the Asset',
              data: [12, 19, 3, 5, 2],
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

