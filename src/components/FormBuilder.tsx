import React, { useState, useEffect } from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';

import * as utils from "../utils";

interface IComponentProps {
    formTitle: string,
    linkText: string,
    buttonText: string,
    config: Array<{ [name: string]: any }>,
    link: string,
    data?: any,
    setData?: any
}

interface IFormState {
    [name: string]: string
}
interface IinputErrors {
    [name: string]: string
}


const FormBuilder: React.FC<IComponentProps> = ({ config, formTitle, linkText, link, buttonText, setData }) => {


    // STATES=======================================

    // States for Login,Password,Email,Repassword 
    const [formState, setFormState] = useState<IFormState>({})

    // States for some errors after validations 
    const [inputErrors, setInputErrors] = useState<IinputErrors>({})

    // State for show some errors under input 
    const [showErrors, setShowErrors] = useState<boolean>(false)

    // State to indicate if the form is valid and ready to submit data to Redux
    const [validForm, setValidForm] = useState<boolean>(false)

    // FUNCTIONS======================================

    // A function that returns true if there are no errors in the error state
    const isValidForm: () => boolean = () => Object.keys(inputErrors).some(error => inputErrors[error] === '')

    // HOOKS==========================================

    useEffect(() => {

        setValidForm(isValidForm)
        validForm ? setData(formState) : console.log('form not valid')

    }, [inputErrors])

    // HANDLERS=======================================

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prevProps) => ({ ...prevProps, [name]: value }))
    }

    const onClickHandler = () => {

        config.forEach(itemConfig => validationForm(itemConfig.name, formState[itemConfig.name], itemConfig.validation))

        setShowErrors(true)

    }

    // VALIDATION============================
    const validationForm = (stateKey: string, stateValue: string, validationsRule: object) => {
        // Сhecks value empty or not
        if (utils.isEmpty(stateValue)) {
            setInputErrors((prevProps) => ({ ...prevProps, [stateKey]: `${[stateKey]} cannot be empty!` }))
            return
        }
        // If not empty starts validation using the validation type(validationsRule) from the config
        if (utils.selectValidationType(validationsRule, stateValue, stateKey)) {
            setInputErrors((prevProps) => ({ ...prevProps, [stateKey]: `Incorrect ${[stateKey]}` }))

        } else {
            // Сhecks if there is a key 'repassword' in the config and password is equal to a repassword
            if ((stateKey === 'password') && (stateValue !== formState.repassword) && (config.some(item => Object.values(item).includes('repassword')))) {
                setInputErrors((prevProps) => ({ ...prevProps, [stateKey]: `Passwords are not same` }))

            } else {
                // If all validations are passed then clears inputErrors state
                setInputErrors((prevProps) => ({ ...prevProps, [stateKey]: '' }))

            }
        }
    }


    return (
        <form className='login-form'>
            <h1 className='login-form__title'>{formTitle}</h1>
            {config.map((item, id) => (
                <Input
                    onChange={onChangeHandler}
                    type={item.type}
                    name={item.name}
                    value={formState[item.name] ? formState[item.name] : ''}
                    placeholder={item.placeholder}
                    key={`${id}+${item.name}`}
                    errors={inputErrors[item.name]}
                    showErrors={showErrors}
                />
            ))}
            <button onClick={onClickHandler} className='login-form__input-block-button' type='button'>{buttonText}</button>
            <Link to={link} className='login-form__input-block-link' >{linkText}</Link>
        </form>
    );
}

export default FormBuilder;
