import React from 'react';

interface InputProps {
    className: string,
    type: string,
    name: string,
    placeholder: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errors?: string,
    showErrors?: boolean


}

const Input: React.FC<InputProps> = ({ className, type, name, placeholder, onChange, errors, showErrors }) => {

    return (
        <p>
            {(errors && showErrors) && <span style={{ color: 'red' }}>{errors}</span>}
            <input onChange={onChange} className={className} type={type} name={name} placeholder={placeholder} />
        </p>
    );
}

export default Input;
