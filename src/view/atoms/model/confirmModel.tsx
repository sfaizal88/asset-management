/**
 * 
 * Confirm model  component
 * @author - Faizal
 * @date - 23rd June 2024
 * 
 */
// COMMON COMPONENT IMPORT
import {Button} from '../';

// STYLE IMPORT
import './styles.css';

type ConfirmModelProps = {
    title: string;
    info: string;
    confirmBtnLabel: string;
    confirmBtnEvent: () => void;
    cancelBtnLabel?: string;
    cancelBtnEvent: () => void;
}

// SELECT COMPONENT DECLARE
const ConfirmModel = ({
    title,
    info,
    confirmBtnLabel,
    confirmBtnEvent,
    cancelBtnLabel = 'Cancel',
    cancelBtnEvent,
}: ConfirmModelProps) => {
    return (
        <div className='model-layover'>
            <div className='model-box'>
                <div className='model-header'>{title}</div>
                <div className='model-content'>{info}</div>
                <div className='model-btn-container'>
                    <Button label={confirmBtnLabel} type='button' onClickHandler={confirmBtnEvent} externalClassName='mb-1 sm:mb-0 sm:mr-1'/>
                    <Button label={cancelBtnLabel} type='button' onClickHandler={cancelBtnEvent} isSecondary/>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModel;