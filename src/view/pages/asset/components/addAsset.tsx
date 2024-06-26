/**
 * Add Asset Page component
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';

// COMMON COMPONENT
import { Container, Loader, TextField, Button, TextArea, SelectTag } from '../../../atoms';
import {FormRow} from '../../../molecules';

// UTILS IMPORT
import type {AssetType} from '../../../../utils/types';
import {AssetTypeOptions, CryptoCodeOptions, CurrencyOptions, StockCodeOptions} from '../../../../utils/constants';
import { AssetEnum } from '../../../../utils/enum';

// STORAGE
import * as Storage from '../../../../storage';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// LOGIN IMPORT
import schema from '../schema';

// CUSTOME HOOK 
import {useManageAssetHook} from '../useManageAssetHook';

// STYLE IMPORT
import '../styles.css';

const AddAssetPage = () => {
    // PARAM
    const { id } = useParams();

    // DECLARE STATE
    const [asset, setAsset] = useState<AssetType>(id ? Storage.getAssetById(Number(id)) : {} as AssetType);
    const [isLoading, setLoading] = useState<boolean>(false);

    // DECLARE NAVIGATE
    const navigate = useNavigate();
    const manageAssetHook = useManageAssetHook({
        setAsset,
        setLoading
    });

    // REACT HOOK FORM DECLARE
    const {control, handleSubmit, register, formState: { errors }, watch} = useForm<AssetType>({
        defaultValues: asset,
        mode: 'onChange',
        resolver: yupResolver(schema),
    });
    const formWatchData = watch();


    const onSubmit = (formData: AssetType) => {
        manageAssetHook.saveAsset(formData)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit(onSubmit)()
        }
    };

    if (isLoading) return <Loader/>

    return (
        <Container title={id ? 'Edit Asset' : 'Create new Asset'} info="A list of all the users in your account including their name, title, email and role.">
            <div className='flex-1 block sm:flex'>
                <div className='flex-1'>
                    <input type='hidden' name="id" value={formWatchData.id || 0}/>
                    <FormRow label="Asset name" required>
                        <TextField 
                            name="asset_name" 
                            placeholder='Enter the asset name' 
                            value={formWatchData.asset_name}
                            register={register}
                            control={control}
                            errors={errors?.asset_name}
                            handlerKeyDown={handleKeyPress}/>
                    </FormRow>
                </div>
                <div className='flex-1'>
                <FormRow label="Asset type" required>
                        <SelectTag 
                            name="asset_type" 
                            options={AssetTypeOptions} 
                            value={formWatchData?.asset_type} 
                            register={register}
                            control={control}
                            errors={errors?.asset_type}/>
                    </FormRow>
                </div>
            </div>
            {formWatchData?.asset_type === AssetEnum.CRYPTO && 
                <div className='block sm:flex flex-1'>
                    <div className='flex-1'>
                        <FormRow label="Crypto code" required>
                            <SelectTag 
                                name="asset_code" 
                                options={CryptoCodeOptions} 
                                value={formWatchData.asset_code} 
                                register={register}
                                control={control}
                                errors={errors?.asset_code}
                            />
                        </FormRow>
                    </div>
                </div>
            }
            {formWatchData?.asset_type === AssetEnum.CURRENCY && 
                <div className='block sm:flex flex-1'>
                    <div className='flex-1'>
                        <FormRow label="Currency code" required>
                            <SelectTag 
                                name="asset_code" 
                                options={CurrencyOptions} 
                                value={formWatchData.asset_code} 
                                register={register}
                                control={control}
                                errors={errors?.asset_code}
                            />
                        </FormRow>
                    </div>
                </div>
            }
            {formWatchData?.asset_type === AssetEnum.STOCK && 
                <div className='block sm:flex flex-1'>
                    <div className='flex-1'>
                        <FormRow label="Stock code" required>
                            <SelectTag 
                                name="asset_code" 
                                options={StockCodeOptions} 
                                value={formWatchData.asset_code}
                                register={register}
                                control={control}
                                errors={errors?.asset_code}
                            />
                        </FormRow>
                    </div>
                </div>
            }
            <div className='block sm:flex flex-1'>
                <div className='flex-1'>
                    <FormRow label="Cost ($USD)" required>
                        <TextField 
                            name="cost" 
                            placeholder='Enter the asset per cost' 
                            value={formWatchData.cost} 
                            register={register}
                            control={control}
                            errors={errors?.cost}
                            type='number'
                            handlerKeyDown={handleKeyPress}
                        />
                    </FormRow>
                </div>
                <div className='flex-1'>
                    <FormRow label="Quantity" required>
                        <TextField 
                            name="quantity" 
                            placeholder='Enter the quantity' 
                            value={formWatchData.quantity} 
                            register={register}
                            control={control}
                            errors={errors?.quantity}
                            type='number'
                            handlerKeyDown={handleKeyPress}
                        />
                    </FormRow>
                </div>
            </div>
            <div className='block sm:flex flex-1'>
                <div className='flex-1'>
                    <FormRow label="Details">
                        <TextArea 
                            name="details" 
                            placeholder='Enter the details' 
                            value={formWatchData.details} 
                            register={register}
                            control={control}
                            errors={errors?.details}
                            handlerKeyDown={handleKeyPress}
                        />
                    </FormRow>
                </div>
            </div>
            <div className='flex flex-1 mt-2'>
                <div className='flex-1 text-right mr-3'>
                    <Button label="Back to listing" type='button' isSecondary onClickHandler={() => navigate(PATH.ASSET_LISTING_PATH)} externalClassName='mb-1 sm:mb-0'/>
                    <Button label={id ? "Save asset" : "Create asset"} type='button'  onClickHandler={handleSubmit(onSubmit)}/>
                </div>
            </div>
                    
            
        </Container>
    )
}

export default AddAssetPage;