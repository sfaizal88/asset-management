/**
 * Constantd
 * @author - Faizal 
 * @date - 19th June 2024
 */
// UTILS IMPORT
import {AssetEnum, CryptoCurrencyCodeEnum} from './enum';
import type {SelectOptionsType} from './types';

export const AssetTypeOptions: SelectOptionsType[] = [
    {value: AssetEnum.PROPERTY, label: 'Property'},
    {value: AssetEnum.CRYPTO, label: 'Crypto'},
    {value: AssetEnum.STOCK, label: 'Stock'}
]

export const CryptoCodeOptions: SelectOptionsType[] = [
    { value: CryptoCurrencyCodeEnum.BITCOIN, label: 'Bitcoin' },
    { value: CryptoCurrencyCodeEnum.ETHEREUM, label: 'Ethereum' },
    { value: CryptoCurrencyCodeEnum.BINANCE_COIN, label: 'Binance Coin' },
    { value: CryptoCurrencyCodeEnum.DOGECOIN, label: 'Dogecoin' },
    { value: CryptoCurrencyCodeEnum.SOLANA, label: 'Solana' },
    { value: CryptoCurrencyCodeEnum.CARDANO, label: 'Cardano' },
    { value: CryptoCurrencyCodeEnum.RIPPLE, label: 'Ripple' },
    { value: CryptoCurrencyCodeEnum.LITECOIN, label: 'Litecoin' },
    { value: CryptoCurrencyCodeEnum.CHAINLINK, label: 'Chainlink' },
    { value: CryptoCurrencyCodeEnum.POLKADOT, label: 'Polkadot' }
]