/**
 * Manage asset hook as asset form
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {Dispatch, SetStateAction} from 'react';
import {useNavigate} from 'react-router-dom';

// UTILS IMPORT
import type {AssetType} from '../../../utils/types';

// ROUTER IMPORT
import * as PATH from '../../routes/constants';

// CUSTOME HOOK 
import {useAssetHook} from '../../../hooks/useAssetHook';

// STORAGE
import * as Storage from '../../../storage';

// UTILS IMPORT
import { AssetEnum } from '../../../utils/enum';
import { formValidationMessages } from '../../../utils/validationMessages';
import useNotification from '../../../utils/notification';

// API IMPORT
// import {GET_ALL_ASSETS, GET_ASSET_BY_ID, SUBMIT_ASSET} from '../../../api/constants';

type ManageAssetHookProps = {
    setLoading: Dispatch<SetStateAction<boolean>>;
    setAssetList?: Dispatch<SetStateAction<AssetType[]>>;
    setAsset?: Dispatch<SetStateAction<AssetType>>;
    setUnchangedAssetList?: Dispatch<SetStateAction<AssetType[]>>;
}

export function useManageAssetHook({
    setLoading,
    setAssetList,
    setAsset,
    setUnchangedAssetList,
}: ManageAssetHookProps) {
    // CUSTOM HOOK
    const assetHook = useAssetHook();

    // NOTIFICATION
    const setNotification = useNotification();

    // NAVIAGTE
    const navigate = useNavigate();

    const getAssetList = async () => {
        try {
            /* const response = await fetch(GET_ALL_ASSETS);
            if (!response.ok) {
                throw new Error("Server error");
            }
            const result = await response.json(); */
            const result = Storage.fetchAllAsset();
            let updateCryptoData = await assetHook.getCryptoPriceBySymbol(result);
            updateCryptoData = await assetHook.getCurrencyByCode(updateCryptoData.data);
            updateCryptoData = await assetHook.getPropertyTotal(updateCryptoData.data);
            updateCryptoData = await assetHook.getStockPriceBySymbol(updateCryptoData.data);
            setAssetList?.(updateCryptoData.data);
            setUnchangedAssetList?.(updateCryptoData.data);
        } catch (error) {
            setNotification.error();
        } finally {
            setLoading(false);
        }
    }

    const saveAsset = async (data: AssetType) => {
        try {
            /* const requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            const response = await fetch(SUBMIT_ASSET, requestOptions);
            if (!response.ok) {
                throw new Error("Server error");
            } else {
                alert("Saved successfully");
                navigate(PATH.ASSET_LISTING_PATH);
            }*/
            if (data?.id) {
                Storage.editAssetById(data);
                setNotification.success(formValidationMessages.assetUpdated);
            } else {
                Storage.addNewAsset(data);
                setNotification.success(formValidationMessages.assetCreated);
            }
            navigate(PATH.ASSET_LISTING_PATH);
        } catch (error) {
            setNotification.error();
        } finally {
            setLoading(false);
        }
    }

    const getAssetById = async (assetId: number) => {
        try {
            /* const response = await fetch(`${GET_ASSET_BY_ID}?id=${id}`);
            if (!response.ok) {
                throw new Error("Server error");
            }
            const result = await response.json();*/
            let result = Storage.getAssetById(assetId);
            if (result.asset_type === AssetEnum.CRYPTO) {
                result = (await assetHook.getCryptoPriceBySymbol([result])).data?.[0];
            } else if (result.asset_type === AssetEnum.CURRENCY) {
                result = (await assetHook.getCurrencyByCode([result])).data?.[0];
            } else if (result.asset_type === AssetEnum.PROPERTY) {
                result = (await assetHook.getPropertyTotal([result])).data?.[0];
            } else if (result.asset_type === AssetEnum.STOCK) {
                result = (await assetHook.getStockPriceBySymbol([result])).data?.[0];
            }
            setAsset?.(result);
        } catch (error) {
            setNotification.error();
        } finally {
            setLoading(false);
        }
    }

    const deleteAssetById = async (assetId: number) => {
        try {
            if (assetId) {
                const updatedList = Storage.deleteAssetById(assetId);
                setAssetList?.(updatedList)
            }
            setNotification.success(formValidationMessages.assetRemoved);
            navigate(PATH.ASSET_LISTING_PATH);
        } catch (error) {
            setNotification.error();
        } finally {
            setLoading(false);
        }
    }

    return {
        getAssetList,
        saveAsset,
        getAssetById,
        deleteAssetById,
    }
}