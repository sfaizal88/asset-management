/**
 * Asset Page component
 * @author - Faizal 
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';

// COMMON COMPONENT
import { Container, Loader, Chip, SearchField, Button, StockIcon, ConfirmModel } from '../../atoms';
import { EmptyScreen } from '../../molecules';

// UTILS IMPORT
import type {AssetType} from '../../../utils/types';
import {convertToCurrency, calculatePercentageDifference} from '../../../utils';

// ROUTER IMPORT
import * as PATH from '../../routes/constants';

// CUSTOME HOOK 
import {useManageAssetHook} from './useManageAssetHook';


// STYLE IMPORT
import './styles.css';


const AssetPage = () => {
    // DECLARE STATE
    const [assetList, setAssetList] = useState<AssetType[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [selectedAsset, setSelectedAsset] = useState<AssetType>({} as AssetType);
    const [isDeleteModelOpen, setDeleteModelOpen] = useState<boolean>(false);

    // DECLARE NAVIGATE
    const navigate = useNavigate();
    const manageAssetHook = useManageAssetHook({
        setAssetList,
        setLoading
    });

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
        manageAssetHook.getAssetList();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (isLoading) return <Loader/>

    return (
        <Container title='All Asset' info="A list of all the users in your account including their name, title, email and role.">
            <div className='block sm:flex flex-1 mb-2'>
                <div className='flex-1 sm:flex-none sm:w-56'>
                <SearchField name="search-field" placeholder='Search by asset type, asset name' 
                        onChangeHandler={handleChange} value={searchKeyword}/>
                </div>
                <div className='flex-1 text-right'>
                    <Button label="Create new asset" type='button' onClickHandler={() => gotoPage(PATH.ADD_ASSET_PATH)}/>
                </div>
            </div>
            <div className='hidden sm:flex flex-1 table-header'>
                <div className='flex-none w-[15%]'>Asset Name</div>
                <div className='flex-none w-[10%]'>Asset Type</div>
                <div className='flex-none w-[15%] text-right'>Quantity</div>
                <div className='flex-none w-[15%] text-right'>Cost</div>
                <div className='flex-none w-[15%] text-right'>Current price</div>
                <div className='flex-none w-[15%] text-right'>Percentage</div>
                <div className='flex-1 text-right'>Actions</div>
            </div>
            {filterList(assetList).length ? 
            filterList(assetList).map(item => (
                <div className='block sm:flex flex-1 table-row mobile-table-row-box' key={`asset-list-${item.id}`}>
                    <div className='flex-none sm:block w-full sm:w-[15%] mobile-table-row'><div className='mobile-table-row-label block sm:hidden'>Asset Name</div><div className='mobile-table-row-value'>{item.asset_name}</div></div>
                    <div className='flex-none sm:block w-full sm:w-[10%] mobile-table-row'><div className='mobile-table-row-label block sm:hidden'>Asset Type</div><div className='mobile-table-row-value'><Chip label={item.asset_type}/></div></div>
                    <div className='flex-none sm:block sm:text-right sm:w-[15%] mobile-table-row'><div className='mobile-table-row-label block sm:hidden'>Quantity</div><div className='mobile-table-row-value'>{item.quantity}</div></div>
                    <div className='flex-none sm:block sm:text-right sm:w-[15%] mobile-table-row'><div className='mobile-table-row-label block sm:hidden'>Cost</div><div className='mobile-table-row-value'>{convertToCurrency(item.cost)}</div></div>
                    <div className='flex-none sm:block sm:text-right sm:w-[15%] mobile-table-row'><div className='mobile-table-row-label block sm:hidden'>Current price</div><div className='mobile-table-row-value'>{convertToCurrency(item.currentPrice)}</div></div>
                    <div className='flex-none sm:block sm:text-right sm:w-[15%] mobile-table-row'><div className='mobile-table-row-label block sm:hidden'>Percentage</div><div className='mobile-table-row-value'>{<StockIcon value={calculatePercentageDifference(item.cost, item.currentPrice)}/>}</div></div>
                    <div className='flex-none sm:flex-1 justify-around sm:text-right sm:justify-end mobile-table-row actions-items'>
                        <Link to={`${PATH.ADD_ASSET_PATH}/${item.id}`}>Edit</Link>&nbsp;&nbsp;|&nbsp;&nbsp; 
                        <div className='link' onClick={() => {setSelectedAsset(item);setDeleteModelOpen(true)}}>Delete</div>&nbsp;&nbsp;|&nbsp;&nbsp; 
                        <Link to={`${PATH.VIEW_ASSET_PATH}/${item.id}`}>View</Link>
                    </div>
                </div>)) : 
                <EmptyScreen
                    title="No asset found"
                    subtitle="Please add new asset by clicking add new asset button"
                    button={<Button label="Create new asset" type='button' onClickHandler={() => gotoPage(PATH.ADD_ASSET_PATH)}/>}
                    icon={<i className="fa fa-ban" aria-hidden="true"></i>}
                />}
                {isDeleteModelOpen && <ConfirmModel 
                    confirmBtnLabel='Delete' confirmBtnEvent={() => {manageAssetHook.deleteAssetById(selectedAsset.id || 0);setDeleteModelOpen(false);}}
                    cancelBtnLabel='Cancel' cancelBtnEvent={() => setDeleteModelOpen(false)}
                    title='Delete asset'
                    info={`Do you want to delete the asset "${selectedAsset.asset_name}"?`}
                    />}
        </Container>
    )
}

export default AssetPage;