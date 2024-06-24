/**
 * Types
 * @author - Faizal 
 * @date - 19th June 2024
 */
// UTILS IMPORT
import {AssetEnum, CryptoCurrencyCodeEnum, CurrencyCodeEnum, NotificationEnum} from './enum';

// NOTIFICATION CONTEXT DATA TYPE
export type NotificationContextType = {
    type: NotificationEnum,
    message: string,
    isOpen: boolean,
}

// ASSET TYPE
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

// TOTAL TYPE
export type Total = {
    currentAssetTotal: number;
    currentMarketTotal: number;
}

// LOGIN USER TYPE
export type LoginUser = {
    username: string;
    password: string;
}

// ALL ASET TOTAL TYPE
export type AllAssetTotal = {
    crypto: Total,
    currency: Total,
    property: Total,
    stock: Total,
}

// SELECT OPTION TYPE
export type SelectOptionsType = {
    label: string | number,
    value: string | number
}