/**
 * Add Asset Page component
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

// COMMON COMPONENT
import { Container, Loader, TextField, Button, TextArea, SelectTag } from '../../../atoms';
import {FormRow} from '../../../molecules';

// UTILS IMPORT
import type {AssetType} from '../../../../utils/types';
import {AssetTypeOptions, CryptoCodeOptions, CurrencyOptions, StockCodeOptions} from '../../../../utils/constants';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// STYLE IMPORT
import '../styles.css';
import { AssetEnum } from '../../../../utils/enum';

// CUSTOME HOOK 
import {useManageAssetHook} from '../useManageAssetHook';

const AddAssetPage = () => {
    // DECLARE STATE
    const [asset, setAsset] = useState<AssetType>({} as AssetType);
    const [isLoading, setLoading] = useState<boolean>(false);

    // PARAM
    const { id } = useParams();

    // DECLARE NAVIGATE
    const navigate = useNavigate();
    const manageAssetHook = useManageAssetHook({
        setAsset,
        setLoading
    });

    const handleChange = (event: any) => {
        setAsset({...asset, [event.target.name]: event.target.value});
    };

    useEffect(() => {
        if (id) manageAssetHook.getAssetById(Number(id));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (isLoading) return <Loader/>

    return (
        <Container title={id ? 'Edit Asset' : 'Create new Asset'} info="A list of all the users in your account including their name, title, email and role.">
            <div className='flex-1 block sm:flex'>
                <div className='flex-1'>
                    <FormRow label="Asset name" required>
                        <TextField name="asset_name" placeholder='Enter the asset name' value={asset?.asset_name}
                        onChangeHandler={handleChange}/>
                    </FormRow>
                </div>
                <div className='flex-1'>
                    <FormRow label="Asset type" required>
                        <SelectTag name="asset_type" options={AssetTypeOptions} value={asset?.asset_type} onChangeHandler={handleChange}/>
                    </FormRow>
                </div>
            </div>
            {asset?.asset_type === AssetEnum.CRYPTO && 
                <div className='block sm:flex flex-1'>
                    <div className='flex-1'>
                        <FormRow label="Cyrypto code" required>
                            <SelectTag name="asset_code" options={CryptoCodeOptions} value={asset?.asset_code} onChangeHandler={handleChange}/>
                        </FormRow>
                    </div>
                </div>
            }
            {asset?.asset_type === AssetEnum.CURRENCY && 
                <div className='block sm:flex flex-1'>
                    <div className='flex-1'>
                        <FormRow label="Currency code" required>
                            <SelectTag name="asset_code" options={CurrencyOptions} value={asset?.asset_code} onChangeHandler={handleChange}/>
                        </FormRow>
                    </div>
                </div>
            }
            {asset?.asset_type === AssetEnum.STOCK && 
                <div className='block sm:flex flex-1'>
                    <div className='flex-1'>
                        <FormRow label="Stock code" required>
                            <SelectTag name="asset_code" options={StockCodeOptions} value={asset?.asset_code} onChangeHandler={handleChange}/>
                        </FormRow>
                    </div>
                </div>
            }
            <div className='block sm:flex flex-1'>
                <div className='flex-1'>
                    <FormRow label="Cost ($USD)" required>
                        <TextField name="cost" placeholder='Enter the asset per cost' value={asset?.cost} onChangeHandler={handleChange}/>
                    </FormRow>
                </div>
                <div className='flex-1'>
                    <FormRow label="Quantity" required>
                        <TextField name="quantity" placeholder='Enter the quantity' value={asset?.quantity} onChangeHandler={handleChange}/>
                    </FormRow>
                </div>
            </div>
            <div className='block sm:flex flex-1'>
                <div className='flex-1'>
                    <FormRow label="Details">
                        <TextArea name="details" placeholder='Enter the details' value={asset?.details} onChangeHandler={handleChange}/>
                    </FormRow>
                </div>
            </div>
            <div className='z flex-1'>
                <div className='flex-1 text-right mr-3'>
                    <Button label="Back to listing" type='button' isSecondary onClickHandler={() => navigate(PATH.ASSET_LISTING_PATH)} externalClassName='mb-1 sm:mb-0'/>
                    <Button label={id ? "Save asset" : "Create asset"} type='button'  onClickHandler={() => manageAssetHook.saveAsset(asset)}/>
                </div>
            </div>
                    
            
        </Container>
    )
}

export default AddAssetPage;