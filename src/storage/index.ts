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

// GET ALL STORED ASSET FROM LOCAL STORAGE
const getAssetData = () => {
    return JSON.parse(localStorage.getItem("data") || "[]") as AssetType[];
}

// FETCH ALL ASSET DATA
export const fetchAllAsset = () => {
    let dataList = getAssetData();
    if (!dataList.length) {
        dataList = assestDataList;
        localStorage.setItem("data", JSON.stringify(assestDataList))
    }
    return dataList;
}

// ADD NEW ASSET INTO THE LOCAL STORAGE
export const addNewAsset = (newData: AssetType) => {
    let dataList = [{...newData, id: generateUniqueId()}, ...getAssetData()];
    localStorage.setItem("data", JSON.stringify(dataList))
}

// UPDATE THE ASSET AND STORE INTO THE LOCAL STORAGE
export const editAssetById = (updatedData: AssetType) => {
    const selectedItem = getAssetData().find(item => item.id === updatedData.id);
    const filteredList = getAssetData().filter(item => item.id !== updatedData.id);
    const dataList = [{...selectedItem, ...updatedData}, ...filteredList];
    localStorage.setItem("data", JSON.stringify(dataList))
}

// DELETE THE SPECIFIC ASSET FROM THE LIST AND STORE INTO LOCAL STORAGE
export const deleteAssetById = (assetId: number) => {
    const dataList = getAssetData().filter(item => item.id !== assetId);
    localStorage.setItem("data", JSON.stringify(dataList));
    return dataList;
}

// GET DETAILS O ASSET BY ID FROM THE STORE LOCAL STORAGE
export const getAssetById = (assetId: number) => {
    return getAssetData().filter(item => item.id === assetId)?.[0] || {} as AssetType;
}