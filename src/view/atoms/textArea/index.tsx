/**
 * 
 * Text area component
 * @author - Faizal
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT

// STYLE IMPORT
import './styles.css';

type TextFieldProps = {
    name: string;
    id?: string;
    placeholder?: string;
    rows?: number
    value?: string | number;
    onChangeHandler?: (val?: any) =>  void;
}

// TEXTFIELD COMPONENT DECLARE
const TextField = ({
    id,
    name,
    placeholder = '',
    rows = 4,
    value = '',
    onChangeHandler
}: TextFieldProps) => {
    return (
        <textarea placeholder={placeholder} 
            name={name} id={id || name} value={value}
            className='input-field' rows={rows} {...(onChangeHandler && { onChange: onChangeHandler })}></textarea>
    )
}

export default TextField;