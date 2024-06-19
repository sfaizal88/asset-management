/**
 * Asset Page component
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';

// COMMON COMPONENT
import { Container, Loader, Chip, TextField, Button } from '../../atoms';
import { EmptyScreen } from '../../molecules';

// UTILS IMPORT
import type {AssetType} from '../../../utils/types';
import {convertToCurrency} from '../../../utils';

// ROUTER IMPORT
import * as PATH from '../../routes/constants';

// API IMPORT
import {GET_ALL_ASSETS} from '../../../api/constants';

// CUSTOME HOOK 
import {useAssetHook} from './useAssetHook';

// STYLE IMPORT
import './styles.css';


const AssetPage = () => {
    // DECLARE STATE
    const [assetList, setAssetList] = useState<AssetType[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [searchKeyword, setSearchKeyword] = useState<string>('');

    // DECLARE NAVIGATE
    const navigate = useNavigate();
    const assetHook = useAssetHook();

    const getAssetList = async () => {
        try {
            const response = await fetch(GET_ALL_ASSETS);
            if (!response.ok) {
                throw new Error("Server error");
            }
            const result = await response.json();
            const updateCryptoData = await assetHook.getCryptoPriceBySymbol(result)
            setAssetList(updateCryptoData);
        } catch (error) {
            console.log("Error")
        } finally {
            setLoading(false);
        }
    }

    const gotoPage = (path: string) => {
        navigate(path);
    }

    const filterList = (list: AssetType[]) => {
        return list.filter(item => !searchKeyword || item.asset_name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 || item.asset_type.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1)
    }

    const handleChange = (event: any) => {
        setSearchKeyword(event.target.value);
    };

    useEffect(() => {
        getAssetList();
    }, []);

    if (isLoading) return <Loader/>

    return (
        <Container title='All Asset' info="A list of all the users in your account including their name, title, email and role.">
            <div className='flex flex-1'>
                <div className='flex-none w-56'>
                    <TextField name="search-field" placeholder='Search by asset type, asset name' 
                        onChangeHandler={handleChange} value={searchKeyword}/>
                </div>
                <div className='flex-1 text-right'>
                    <Button label="Create new asset" type='button' onClickHandler={() => gotoPage(PATH.ADD_ASSET_PATH)}/>
                </div>
            </div>
            <div className='flex flex-1 table-header'>
                <div className='flex-none w-3/12'>Asset Name</div>
                <div className='flex-none w-60'>Asset Type</div>
                <div className='flex-1 text-right'>Quantity</div>
                <div className='flex-1 text-right'>Cost</div>
                <div className='flex-1 text-right'>Current price</div>
                <div className='flex-none w-60 text-right'>Actions</div>
            </div>
            {filterList(assetList).length ? 
            filterList(assetList).map(item => (
                <div className='flex flex-1 table-row' key={item.id}>
                    <div className='flex-none w-3/12'>{item.asset_name}</div>
                    <div className='flex-none w-60'><Chip label={item.asset_type}/></div>
                    <div className='flex-1 text-right'>{item.quantity}</div>
                    <div className='flex-1 text-right'>{convertToCurrency(item.cost)}</div>
                    <div className='flex-1 text-right'>{convertToCurrency(item.currentPrice)}</div>
                    <div className='flex-none w-60 text-right'>
                        <Link to={`${PATH.ADD_ASSET_PATH}/${item.id}`}>Edit</Link>&nbsp;&nbsp;|&nbsp;&nbsp; 
                        <a href="void">Delete</a>&nbsp;&nbsp;|&nbsp;&nbsp; 
                        <Link to={`${PATH.VIEW_ASSET_PATH}/${item.id}`}>View</Link>
                    </div>
                </div>)) : 
                <EmptyScreen
                    title="No asset found"
                    subtitle="Please add new asset by clicking add new asset button"
                    button={<Button label="Create new asset" type='button' onClickHandler={() => gotoPage(PATH.ADD_ASSET_PATH)}/>}
                    icon={<i className="fa fa-ban" aria-hidden="true"></i>}
                />}
        </Container>
    )
}

export default AssetPage;