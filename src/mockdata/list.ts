/**
 * Mock data
 * @author - Faizal 
 * @date - 20th June 2024
 */
// GENERIC IMPORT

// UTILS IMPORT
import type {AssetType} from '../utils/types';
import {AssetEnum} from '../utils/enum';

export const assestDataList: AssetType[] = [
    {
      "id": 1,
      "asset_name": "Thondi Property",
      "details": "",
      "asset_type": AssetEnum.PROPERTY,
      "asset_code": "",
      "cost": 2500000,
      "quantity": 1,
      "currentPrice": 3500000
    },
    {
      "id": 2,
      "asset_name": "Amazon",
      "details": "",
      "asset_type": AssetEnum.STOCK,
      "asset_code": "AMZN",
      "cost": 150.87,
      "quantity": 87,
      "currentPrice": 0
    },
    {
      "id": 4,
      "asset_name": "Apple Inc",
      "details": "",
      "asset_type": AssetEnum.STOCK,
      "asset_code": "AAPL",
      "cost": 8900.98,
      "quantity": 7,
      "currentPrice": 0
    },
    {
      "id": 5,
      "asset_name": "Ethereum",
      "asset_code": "ethereum",
      "details": "",
      "asset_type": AssetEnum.CRYPTO,
      "cost": 3000,
      "quantity": 13,
      "currentPrice": 0
    },
    {
      "id": 6,
      "asset_name": "Bitcoin",
      "asset_code": "bitcoin",
      "details": "",
      "asset_type": AssetEnum.CRYPTO,
      "cost": 64000,
      "quantity": 3.5,
      "currentPrice": 0
    },
    {
      "id": 7,
      "asset_name": "Singapore dollar",
      "asset_code": "SGD",
      "details": "",
      "asset_type": AssetEnum.CURRENCY,
      "cost": 1.21,
      "quantity": 1200,
      "currentPrice": 0
    },
    {
      "id": 8,
      "asset_name": "AED - United Arab Emirates Dirham",
      "asset_code": "AED",
      "details": "",
      "asset_type": AssetEnum.CURRENCY,
      "cost": 3.33,
      "quantity": 1000,
      "currentPrice": 0
    }
  ]