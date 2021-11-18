import React from 'react';

interface InputProps {
    type: string,
    name: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errors: string,
    showErrors: boolean,
    value: string
}

const Input: React.FC<InputProps> = ({ type, name, placeholder, onChange, errors, showErrors, value }) => {

    return (
        <p className='login-form__input-block'>
            <input
                onChange={onChange}
                className={(errors && showErrors) ? 'login-form__input-block-item error' : 'login-form__input-block-item'}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
            />
            {(errors && showErrors) && <span className='login-form__error' style={{ color: 'red' }}>{errors}</span>}
        </p>
    );
}

export default Input;
