/**
 * 
 * Text field component
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
    value?: string | number;
    placeholder?: string;
    type?: 'text' | 'file' | 'number' | 'password' | 'hidden';
    register?: any;
    control?: any;
    errors?: any;
    onChangeHandler?: (val?: any) =>  void;
    externalClassName?: string;
}

// TEXTFIELD COMPONENT DECLARE
const TextField = ({
    id,
    name,
    placeholder = '',
    value = '',
    type = 'text',
    control,
    errors,
    register,
    onChangeHandler,
    externalClassName
}: TextFieldProps) => {
    return (
        <div className={externalClassName}>
            <Controller
                control={control}
                name={name}
                defaultValue={value}
                render={({ field }) => (
                    <><input 
                        {...field}
                        {...register(name)}
                        type={type} placeholder={placeholder} 
                        id={id || name} 
                        name={name}
                        value={value}
                        onChange={(e) => {
                            field.onChange(e);
                            if (onChangeHandler) {
                                onChangeHandler(e.target.value);
                            }
                        }}
                        className={clsx('input-field', errors?.message && 'error-field')}
                    />
                    <div className='error-box'>{errors?.message}</div>
                    </>
                )}
            /> 
        </div>
    )
}

export default TextField;