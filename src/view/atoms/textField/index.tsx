/**
 * 
 * Text field component
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
    value?: string | number;
    placeholder?: string;
    type?: 'text' | 'file' | 'number' | 'password' | 'hidden';
    onChangeHandler?: (val?: any) =>  void;
}

// TEXTFIELD COMPONENT DECLARE
const TextField = ({
    id,
    name,
    placeholder = '',
    value = '',
    type = 'text',
    onChangeHandler,
}: TextFieldProps) => {
    return (
        <input type={type} placeholder={placeholder} 
            name={name} id={id || name} value={value} 
            className='input-field' {...(onChangeHandler && { onChange: onChangeHandler })}/>
    )
}

export default TextField;