/**
 * View Asset Page component
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// COMMON COMPONENT
import { Container, Loader, Button } from '../../../atoms';
import {FormRow} from '../../../molecules';

// UTILS IMPORT
import type {AssetType} from '../../../../utils/types';
import {convertToCurrency} from '../../../../utils';

// API IMPORT
import {GET_ASSET_BY_ID} from '../../../../api/constants';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// CUSTOME HOOK 
import {useAssetHook} from '../useAssetHook';

// STYLE IMPORT
import '../styles.css';

const ViewAssetPage = () => {
    // DECLARE STATE
    const [asset, setAsset] = useState<AssetType>();
    const [isLoading, setLoading] = useState<boolean>(true);

    // PARAM AND CUSTOME HOOK
    const { id } = useParams();
    const assetHook = useAssetHook();

    // DECLARE NAVIGATE
    const navigate = useNavigate();

    const getAssetById = async () => {
        try {
            const response = await fetch(`${GET_ASSET_BY_ID}?id=${id}`);
            if (!response.ok) {
                throw new Error("Server error");
            }
            const result = await response.json();
            const updateCryptoData = await assetHook.getCryptoPriceBySymbol([result])
            setAsset(updateCryptoData[0]);
        } catch (error) {
            console.log("Error")
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAssetById();
    }, []);

    if (isLoading) return <Loader/>

    return (
        <Container title='View Asset' info="A list of all the users in your account including their name, title, email and role.">
            <div className='flex flex-1'>
                <div className='flex-1'>
                    <FormRow label="Asset name">
                        {asset?.asset_name}
                    </FormRow>
                </div>
                <div className='flex-1'>
                    <FormRow label="Asset type">
                        {asset?.asset_type}
                    </FormRow>
                </div>
            </div>
            <div className='flex flex-1'>
                <div className='flex-1'>
                    <FormRow label="Cost">
                        {convertToCurrency(asset?.cost || 0)}
                    </FormRow>
                </div>
                <div className='flex-1'>
                    <FormRow label="Quantity">
                        {asset?.quantity}
                    </FormRow>
                </div>
            </div>
            <div className='flex flex-1'>
                <div className='flex-1'>
                    <FormRow label="Current price">
                        {asset?.currentPrice}
                    </FormRow>
                </div>
                <div className='flex-1'>
                    <FormRow label="Details">
                        {asset?.details}
                    </FormRow>
                </div>
            </div>
            <div className='flex flex-1'>
                <div className='flex-1 text-right mr-3'>
                    <Button label="Back to listing" type='button' isSecondary onClickHandler={() => navigate(PATH.ASSET_LISTING_PATH)}/>
                </div>
            </div>
                    
            
        </Container>
    )
}

export default ViewAssetPage;