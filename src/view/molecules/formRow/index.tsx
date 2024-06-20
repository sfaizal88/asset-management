/**
 * 
 * Form row component
 * @author - Faizal
 * @date - 19th June 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {PropsWithChildren} from 'react';

// COMMON COMPONENT
import {EmptyLabel} from '../';

// STYLE IMPORT
import  './styles.css';

// COMPONENT PROPS
type FormRowProps = {
    label: string;
    required?: boolean;
    externalClasses?: string,
}

const FormRow = ({
    label,
    required,
    externalClasses,
    children,
}: PropsWithChildren<FormRowProps>) => {
    return (
        <div className={clsx("field-set", externalClasses)}>
            <div className={clsx("field-label")}>
                {label} {required && <span className="required">&nbsp;*</span>}
            </div>
            <div className={clsx("field")}>
                {children || <EmptyLabel/>}
            </div>
        </div>
    )
}

export default FormRow;