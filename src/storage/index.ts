/**
 * Storage data
 * @author - Faizal 
 * @date - 20th June 2024
 */
// GENERIC IMPORT

// UTILS IMPORT
import type {AssetType} from '../utils/types';
import {generateUniqueId} from '../utils';

// JSON DATA
import {assestDataList} from '../mockdata/list';

const getAssetData = () => {
    return JSON.parse(localStorage.getItem("data") || "[]") as AssetType[];
}

export const fetchAllAsset = () => {
    let dataList = getAssetData();
    if (!dataList.length) {
        dataList = assestDataList;
        localStorage.setItem("data", JSON.stringify(assestDataList))
    }
    return dataList;
}

export const addNewAsset = (newData: AssetType) => {
    let dataList = [...getAssetData(), {...newData, id: generateUniqueId()}];
    localStorage.setItem("data", JSON.stringify(dataList))
}

export const editAssetById = (updatedData: AssetType) => {
    const dataList = getAssetData().map(item => {
        return (item.id === updatedData.id) ? updatedData : item;
    });
    localStorage.setItem("data", JSON.stringify(dataList))
}

export const deleteAssetById = (assetId: number) => {
    const dataList = getAssetData().filter(item => item.id !== assetId);
    localStorage.setItem("data", JSON.stringify(dataList));
    return dataList;
}

export const getAssetById = (assetId: number) => {
    return getAssetData().filter(item => item.id === assetId)?.[0] || {} as AssetType;
}