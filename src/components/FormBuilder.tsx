import React, { useState, useEffect } from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';

import * as utils from "../utils";
import { createUser } from '../requests/createUser';


interface IComponentProps {
    formTitle: string,
    linkText: string,
    buttonText: string,
    config: Array<{ [name: string]: any }>,
    link: string,
}

interface IFormState {
    [name: string]: string
}
interface IinputErrors {
    [name: string]: string
}


const FormBuilder: React.FC<IComponentProps> = ({ config, formTitle, linkText, link, buttonText }) => {


    // STATES=======================================

    // States for Login,Password,Email,Repassword 
    const [formState, setFormState] = useState<IFormState>({})

    // States for some errors after validations 
    const [inputErrors, setInputErrors] = useState<IinputErrors>({})

    // State for show some errors under input 
    const [showErrors, setShowErrors] = useState<boolean>(false)

    // State for disable or enable submit button
    const [disabledButton, setDisabledButton] = useState<boolean>(false)

    const [validForm, setValidForm] = useState<boolean>(false)


    // HOOKS==========================================

    useEffect(() => {
        config.map(item => {
            setFormState((prevProps) => ({ ...prevProps, [item.name]: '' }))
        })

    }, [])

    useEffect(() => {
        if (Object.keys(formState).length === config.length) {
            setDisabledButton(true)
        }

    }, [formState, config.length]);

    useEffect(() => {

        for (let i in inputErrors) {
            if (inputErrors[i] === '') {
                setValidForm(true)
            } else {
                setValidForm(false)
            }
        }

    }, [showErrors, formState])
    // HANDLERS=======================================

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prevProps) => ({ ...prevProps, [name]: value }))

    }

    const onClickHandler = () => {

        Object.keys(formState).forEach((item) => validationForm(item))
        setShowErrors(true)

        // createUser(formState.email, formState.password)


    }

    // VALIDATION============================
    const validationForm = (stateKey: string) => {
        if (utils.isEmpty(formState[stateKey])) {
            setInputErrors((prevProps) => {
                return { ...prevProps, [stateKey]: `${[stateKey]} cannot be empty!` }
            })
        } else {
            for (let j = 0; j < config.length; j++) {
                for (let i in config[j]) {
                    if (utils.selectValidationType(config[j].validation, formState[stateKey])) {
                        setInputErrors((prevProps) => ({ ...prevProps, [stateKey]: `Incorrect ${[stateKey]}` }))
                    } else {
                        setInputErrors((prevProps) => ({ ...prevProps, [stateKey]: '' }))
                    }
                }
            }

        }
    }


    // const validationForm = (stateKey: string) => {
    //     switch (stateKey) {
    //         case 'email':
    //             if (utils.isEmpty(formState[stateKey])) {
    //                 setInputErrors((prevProps) => {
    //                     return { ...prevProps, [stateKey]: 'Email cannot be empty!' }
    //                 })
    //             } else {
    //                 if (utils.isRightEmail(formState[stateKey])) {
    //                     setInputErrors((prevProps) => {
    //                         return { ...prevProps, [stateKey]: 'Incorrect Email' }
    //                     })
    //                 } else {
    //                     setInputErrors((prevProps) => {
    //                         return { ...prevProps, [stateKey]: '' }
    //                     })
    //                 }
    //             }
    //             break


    //         case 'login':
    //             if (utils.isEmpty(formState[stateKey])) {
    //                 setInputErrors((prevProps) => {
    //                     return { ...prevProps, [stateKey]: 'Login cannot be empty!' }
    //                 })
    //             } else {
    //                 if (utils.isRightLengthLogin(formState[stateKey])) {
    //                     setInputErrors((prevProps) => {
    //                         return { ...prevProps, [stateKey]: 'Incorrect login' }
    //                     })

    //                 } else {
    //                     setInputErrors((prevProps) => {
    //                         return { ...prevProps, [stateKey]: '' }
    //                     })
    //                 }
    //             }
    //             break

    //         case 'password':
    //             if (utils.isEmpty(formState[stateKey])) {
    //                 setInputErrors((prevProps) => {
    //                     return { ...prevProps, [stateKey]: 'Password cannot be empty!' }
    //                 })

    //             } else {
    //                 if (utils.isRightLengthPassword(formState[stateKey])) {
    //                     setInputErrors((prevProps) => {
    //                         return { ...prevProps, [stateKey]: 'Incorrect password' }
    //                     })

    //                 } else {
    //                     setInputErrors((prevProps) => {
    //                         return { ...prevProps, [stateKey]: '' }
    //                     })
    //                 }
    //             }
    //             break
    //         case 'repassword':
    //             if (utils.isEmpty(formState[stateKey])) {
    //                 setInputErrors((prevProps) => {
    //                     return { ...prevProps, [stateKey]: 'Please confirm password!' }
    //                 })

    //             } else {
    //                 if (formState[stateKey] !== formState.password) {
    //                     setInputErrors((prevProps) => {
    //                         return { ...prevProps, [stateKey]: 'Passwords are not the same' }
    //                     })

    //                 } else {
    //                     setInputErrors((prevProps) => {
    //                         return { ...prevProps, [stateKey]: '' }
    //                     })
    //                 }
    //             }
    //             break
    //         default:
    //             console.log('Default case')

    //     }
    // }


    return (
        <form className='login-form'>
            <h1 className='login-form__title'>{formTitle}</h1>
            {config.map((item, id) => {
                return <Input
                    onChange={onChangeHandler}
                    type={item.type}
                    name={item.name}
                    value={formState[item.name] ? formState[item.name] : ''}
                    placeholder={item.placeholder}
                    key={`${id}+${item.name}`}
                    errors={inputErrors[item.name]}
                    showErrors={showErrors}
                />
            })}
            <button disabled={!disabledButton} onClick={onClickHandler} className={disabledButton ? 'login-form__input-block-button' : 'login-form__input-block-button disabled'} type='button'>{buttonText}</button>
            <Link to={link} className='login-form__input-block-link' >{linkText}</Link>
        </form>
    );
}

export default FormBuilder;
