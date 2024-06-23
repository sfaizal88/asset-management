/**
 * 
 * Text area component
 * @author - Faizal
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {Controller} from 'react-hook-form';

// STYLE IMPORT
import './styles.css';

type TextFieldProps = {
    name: string;
    id?: string;
    placeholder?: string;
    rows?: number
    value?: string | number;
    register?: any;
    control?: any;
    errors?: any;
}

// TEXTFIELD COMPONENT DECLARE
const TextField = ({
    id,
    name,
    placeholder = '',
    rows = 4,
    value = '',
    control,
    errors,
    register,
}: TextFieldProps) => {
    return (
        <Controller
            control={control}
            name={name}
            render={() => (
                <>
                <textarea 
                    {...register(name)} 
                    placeholder={placeholder} 
                    name={name} 
                    id={id || name}
                    className={clsx('input-field', errors?.message && 'error-field')}
                    rows={rows}
                ></textarea>
                <div className='error-box'>{errors?.message}</div>
            </>
            )}
        /> 
    )
}

export default TextField;