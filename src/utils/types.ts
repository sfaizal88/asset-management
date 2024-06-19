/**
 * Types
 * @author - Faizal 
 * @date - 19th June 2024
 */
// UTILS IMPORT
import {AssetEnum, CryptoCurrencyCodeEnum} from './enum';

export type AssetType = {
    id: number | undefined;
    asset_name: string;
    details: string;
    asset_type: AssetEnum;
    cost: number;
    quantity: number;
    currentPrice: number;
    asset_code?: CryptoCurrencyCodeEnum | any;
}

export type SelectOptionsType = {
    label: string | number,
    value: string | number
}