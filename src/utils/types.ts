/**
 * Types
 * @author - Faizal 
 * @date - 19th June 2024
 */
// UTILS IMPORT
import {AssetEnum, CryptoCurrencyCodeEnum, CurrencyCodeEnum} from './enum';

export type AssetType = {
    id: number | undefined | null;
    asset_name: string;
    details: string;
    asset_type: AssetEnum;
    cost: number;
    quantity: number;
    currentPrice: number;
    asset_code?: CryptoCurrencyCodeEnum | CurrencyCodeEnum | any;
}

export type Total = {
    currentAssetTotal: number;
    currentMarketTotal: number;
}

export type AllAssetTotal = {
    crypto: Total,
    currency: Total,
    property: Total,
    stock: Total,
}

export type SelectOptionsType = {
    label: string | number,
    value: string | number
}