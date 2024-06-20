/**
 * Custom hook 
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT

// UTILS IMPORT
import type {AssetType, Total} from '../utils/types';
import {AssetEnum} from '../utils/enum';

export function useAssetHook() {

    const getCryptoPriceBySymbol = async (data: AssetType[]) => {
        const price: Total = {
            currentAssetTotal: 0, currentMarketTotal: 0
        }
        try {
            /* const symbol = data.filter(item => item.asset_type === AssetEnum.CRYPTO).map(item => item.asset_code).join(",");
            if (symbol) {
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
            } */
        } catch (error: any) {
            console.log(error.message);
        }
        return {
            data,
            total: price
        };
    }

    const getStockPriceBySymbol = async (data: AssetType[]) => {
        const price: Total = {
            currentAssetTotal: 0, currentMarketTotal: 0
        }
        try {
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
            console.log(error.message);
        }
        return {
            data,
            total: price
        };
    }

    const getCurrencyByCode = async (data: AssetType[]) => {
        const price = {
            currentAssetTotal: 0, currentMarketTotal: 0
        }
        try {
            /* const response = await fetch(`https://v6.exchangerate-api.com/v6/065842ad438a14f76ce0fb6f/latest/USD`);
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
            }); */
        } catch (error: any) {
            console.log(error.message);
        }
        return {
            data,
            total: price
        }
    }

    const getPropertyTotal = async (data: AssetType[]) => {
        const price = {
            currentAssetTotal: 0, currentMarketTotal: 0
        }
        try {
            data = data.map(item => {
                if (item.asset_type === AssetEnum.PROPERTY) {
                    price.currentAssetTotal += Number(item.cost) * Number(item.quantity);
                    price.currentMarketTotal += Number(item.currentPrice) * Number(item.quantity);
                }
                return item;
            });
        } catch (error: any) {
            console.log(error.message);
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