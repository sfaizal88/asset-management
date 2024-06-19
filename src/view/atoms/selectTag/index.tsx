/**
 * 
 * Select tag  component
 * @author - Faizal
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT

// UTILS IMPORT
import type {SelectOptionsType} from '../../../utils/types';

// STYLE IMPORT
import './styles.css';

type SelectTagProps = {
    options: SelectOptionsType[];
    name?: string;
    value?: string | number;
    onChangeHandler?: (val?: any) =>  void;
}

// SELECT COMPONENT DECLARE
const SelectTag = ({
    options,
    name,
    value = '',
    onChangeHandler,
}: SelectTagProps) => {
    return (
        <select id={name} name={name} className='select-field' value={value} {...(onChangeHandler && { onChange: onChangeHandler })}>
            {options.map(item => <option value={item.value} key={item.value}>{item.label}</option>)}
        </select>
    )
}

export default SelectTag;