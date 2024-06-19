/**
 * Custom hook 
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT

// UTILS IMPORT
import type {AssetType} from '../../../utils/types';
import {AssetEnum} from '../../../utils/enum';

export function useAssetHook() {

    const getCryptoPriceBySymbol = async (data: AssetType[]) => {
        try {
            const symbol = data.filter(item => item.asset_type === AssetEnum.CRYPTO).map(item => item.asset_code).join(",");
            if (symbol) {
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const output = await response.json();
                data = data.map(item => {
                    if (item.asset_type === AssetEnum.CRYPTO) {
                        item.currentPrice = output?.[item.asset_code].usd || 0
                    }
                    return item;
                });
            }
        } catch (error: any) {
            console.log(error.message);
        } finally {
            console.log("Done");
        }
        return data;
    }

    return {
        getCryptoPriceBySymbol
    }
}