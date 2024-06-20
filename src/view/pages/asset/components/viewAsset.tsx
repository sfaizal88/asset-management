/**
 * View Asset Page component
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// COMMON COMPONENT
import { Container, Loader, Button, StockIcon } from '../../../atoms';
import {FormRow} from '../../../molecules';

// UTILS IMPORT
import type {AssetType} from '../../../../utils/types';
import {convertToCurrency, calculatePercentageDifference} from '../../../../utils';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// CUSTOME HOOK 
import {useManageAssetHook} from '../useManageAssetHook';

// STYLE IMPORT
import '../styles.css';

const ViewAssetPage = () => {
    // DECLARE STATE
    const [asset, setAsset] = useState<AssetType>({} as AssetType);
    const [isLoading, setLoading] = useState<boolean>(true);

    // PARAM AND CUSTOME HOOK
    const { id } = useParams();
    const manageAssetHook = useManageAssetHook({
        setAsset,
        setLoading
    });

    // DECLARE NAVIGATE
    const navigate = useNavigate();

    useEffect(() => {
        if (id) manageAssetHook.getAssetById(Number(id));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                    <FormRow label="Cost (USD) per asset">
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
                        <div className='flex flex-1'>{convertToCurrency(asset?.currentPrice || 0)}&nbsp;{<StockIcon value={calculatePercentageDifference(asset?.cost, asset?.currentPrice)}/>}</div>
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