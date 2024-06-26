/**
 * Custom hook 
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT

// UTILS IMPORT
import type {AssetType, Total} from '../utils/types';
import {AssetEnum} from '../utils/enum';
import useNotification from '../utils/notification';

export function useAssetHook() {
    // NOTIFICATION
    const setNotification = useNotification();

    // FUNCTION TO PULL REAL TIME MARKET PRICE FOR STOCK
    const getCryptoPriceBySymbol = async (data: AssetType[]) => {
        // FINDING TOTAL FOR GRAPH AND DASHBAORD WIDGET
        const price: Total = {
            currentAssetTotal: 0, currentMarketTotal: 0
        }
        try {
            const symbol = data.filter(item => item.asset_type === AssetEnum.CRYPTO).map(item => item.asset_code).join(",");
            if (symbol) {
                // API TO CALL THE REAL TIME DATA
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const output = await response.json();
                data = data.map(item => {
                    if (item.asset_type === AssetEnum.CRYPTO) {
                        item.currentPrice = output?.[item.asset_code].usd || 0;
                        price.currentAssetTotal += Number(item.cost) * Number(item.quantity);
                        price.currentMarketTotal += Number(output?.[item.asset_code].usd) * Number(item.quantity);
                    }
                    return item;
                });
            }
        } catch (error: any) {
            setNotification.error("Something wrong with crypto market value. Please try again later.");
        }
        return {
            data,
            total: price
        };
    }

    // FUNCTION TO PULL REAL TIME MARKET PRICE FOR STOCK
    const getStockPriceBySymbol = async (data: AssetType[]) => {
        // FINDING TOTAL FOR GRAPH AND DASHBAORD WIDGET
        const price: Total = {
            currentAssetTotal: 0, currentMarketTotal: 0
        }
        try {
            // API TO CALL THE REAL TIME DATA
            /* const symbols = data.filter(item => item.asset_type === AssetEnum.STOCK).map(item => item.asset_code);
            if (symbols) {
                const apiKey = 'FKBERE0EKW0NJ8Y4';
                const apiUrlBase = 'https://www.alphavantage.co/query';
                const requests = symbols.map(symbol => {
                    const apiUrl = `${apiUrlBase}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}&interval=60`;
                    return fetch(apiUrl)
                        .then(response => response.json())
                        .then(data => data);
                });
                const responses = await Promise.all(requests);
                console.log("responses: ", responses);
                
                const output = await response.json();
                data = data.map(item => {
                    if (item.asset_type === AssetEnum.STOCK) {
                        item.currentPrice = output?.[item.asset_code].usd || 0;
                        price.currentAssetTotal += Number(item.cost) * Number(item.quantity);
                        price.currentMarketTotal += Number(output?.[item.asset_code].usd) * Number(item.quantity);
                    }
                    return item;
                });
            } */
        } catch (error: any) {
            setNotification.error("Something wrong with stock market value. Please try again later.");
        }
        return {
            data,
            total: price
        };
    }

    // FUNCTION TO PULL REAL TIME MARKET PRICE FOR CURRENCY
    const getCurrencyByCode = async (data: AssetType[]) => {
        // FINDING TOTAL FOR GRAPH AND DASHBAORD WIDGET
        const price = {
            currentAssetTotal: 0, currentMarketTotal: 0
        }
        try {
            // API TO CALL THE REAL TIME DATA
            const response = await fetch(`https://v6.exchangerate-api.com/v6/065842ad438a14f76ce0fb6f/latest/USD`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const output = await response.json();
            data = data.map(item => {
                if (item.asset_type === AssetEnum.CURRENCY) {
                    item.currentPrice = output?.conversion_rates?.[item.asset_code] || 0;
                    price.currentAssetTotal += Number(item.cost) * Number(item.quantity);
                    price.currentMarketTotal += Number(item.currentPrice) * Number(item.quantity);
                }
                return item;
            });
        } catch (error: any) {
            setNotification.error("Something wrong with currency market value. Please try again later.");
        }
        return {
            data,
            total: price
        }
    }

    // FUNCTION TO PULL REAL TIME MARKET PRICE FOR PROPERTY REDIFNED
    const getPropertyTotal = async (data: AssetType[]) => {
        // FINDING TOTAL FOR GRAPH AND DASHBAORD WIDGET
        const price = {
            currentAssetTotal: 0, currentMarketTotal: 0
        }
        try {
            data = data.map(item => {
                if (item.asset_type === AssetEnum.PROPERTY) {
                    item.currentPrice = Number(item.cost) + 2000;
                    price.currentAssetTotal += Number(item.cost) * Number(item.quantity);
                    price.currentMarketTotal += Number(item.currentPrice) * Number(item.quantity);
                }
                return item;
            });
        } catch (error: any) {
            setNotification.error("Something wrong with property market value. please try again later.");
        }
        return {
            data,
            total: price
        }
    }

    return {
        getCryptoPriceBySymbol,
        getCurrencyByCode,
        getPropertyTotal,
        getStockPriceBySymbol
    }
}

/**
 * 
    const prevFetchTime = localStorage.getItem('prevFetchTime');
    // && (!prevFetchTime || calculateTimeDifference(prevFetchTime) > 5)
    localStorage.setItem('prevFetchTime', (Math.floor(Date.now() / 1000)).toString());
 */