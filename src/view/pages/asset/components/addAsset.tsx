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
import {AssetTypeOptions, CryptoCodeOptions} from '../../../../utils/constants';

// API IMPORT
import {SUBMIT_ASSET, GET_ASSET_BY_ID} from '../../../../api/constants';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// STYLE IMPORT
import '../styles.css';
import { AssetEnum } from '../../../../utils/enum';

const AddAssetPage = () => {
    // DECLARE STATE
    const [asset, setAsset] = useState<AssetType>({} as AssetType);
    const [isLoading, setLoading] = useState<boolean>(false);

    // PARAM
    const { id } = useParams();

    // DECLARE NAVIGATE
    const navigate = useNavigate();

    const submitAsset = async (data: AssetType) => {
        try {
            const requestOptions = {
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
            }
        } catch (error) {
            console.log("Error")
        } finally {
            setLoading(false);
        }
    }

    const getAssetById = async () => {
        try {
            const response = await fetch(`${GET_ASSET_BY_ID}?id=${id}`);
            if (!response.ok) {
                throw new Error("Server error");
            }
            const result = await response.json();
            setAsset(result);
        } catch (error) {
            console.log("Error")
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (event: any) => {
        setAsset({...asset, [event.target.name]: event.target.value});
    };

    useEffect(() => {
        if (id) getAssetById();
    }, []);

    if (isLoading) return <Loader/>

    return (
        <Container title={id ? 'Edit Asset' : 'Create new Asset'} info="A list of all the users in your account including their name, title, email and role.">
            <div className='flex flex-1'>
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
                <div className='flex flex-1'>
                    <div className='flex-1'>
                        <FormRow label="Asset code" required>
                            <SelectTag name="asset_type" options={CryptoCodeOptions} value={asset?.asset_code} onChangeHandler={handleChange}/>
                        </FormRow>
                    </div>
                </div>
            }
            <div className='flex flex-1'>
                <div className='flex-1'>
                    <FormRow label="Cost" required>
                        <TextField name="cost" placeholder='Enter the asset cost' value={asset?.cost} onChangeHandler={handleChange}/>
                    </FormRow>
                </div>
                <div className='flex-1'>
                    <FormRow label="Quantity" required>
                        <TextField name="quantity" placeholder='Enter the quantity' value={asset?.quantity} onChangeHandler={handleChange}/>
                    </FormRow>
                </div>
            </div>
            <div className='flex flex-1'>
                <div className='flex-1'>
                    <FormRow label="Details">
                        <TextArea name="details" placeholder='Enter the details' value={asset?.details} onChangeHandler={handleChange}/>
                    </FormRow>
                </div>
            </div>
            <div className='flex flex-1'>
                <div className='flex-1 text-right mr-3'>
                    <Button label="Back to listing" type='button' isSecondary onClickHandler={() => navigate(PATH.ASSET_LISTING_PATH)}/>
                    <Button label={id ? "Save asset" : "Create asset"} type='button'  onClickHandler={() => submitAsset(asset)}/>
                </div>
            </div>
                    
            
        </Container>
    )
}

export default AddAssetPage;