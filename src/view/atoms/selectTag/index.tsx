/**
 * 
 * Select tag  component
 * @author - Faizal
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {Controller} from 'react-hook-form';

// UTILS IMPORT
import type {SelectOptionsType} from '../../../utils/types';

// STYLE IMPORT
import './styles.css';

type SelectTagProps = {
    options: SelectOptionsType[];
    name: string;
    id?: string;
    value?: string | number;
    register?: any;
    control?: any;
    errors?: any;
}

// SELECT COMPONENT DECLARE
const SelectTag = ({
    options,
    name,
    id,
    value = '',
    control,
    errors,
    register,
}: SelectTagProps) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={value}
            render={() => (
                <>
                    <select 
                        {...register(name)} 
                        id={id || name} 
                        name={name} 
                        value={value}
                        className={clsx('select-field', errors?.message && 'error-field')}>
                        {options.map(item => <option value={item.value} key={`select-${item.value}`}>{item.label}</option>)}
                    </select>
                    <div className='error-box'>{errors?.message}</div>
                </>
            )}
        /> 
    )
}

export default SelectTag;