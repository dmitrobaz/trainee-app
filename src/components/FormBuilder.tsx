import React, { useState, useEffect } from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';

import * as utils from "../utils";

interface IComponentProps {
    formTitle: string,
    linkText: string,
    buttonText: string,
    config: Array<{ [name: string]: string }>,
    link: string
}

interface IFormState {
    [name: string]: string
}
interface IinputErrors {
    [name: string]: string
}


const FormBuilder: React.FC<IComponentProps> = ({ config, formTitle, linkText, link, buttonText }) => {
    // STATES=======================================

    const [formState, setFormState] = useState<IFormState>({})

    const [inputErrors, setInputErrors] = useState<IinputErrors>({})

    const [showErrors, setShowErrors] = useState<boolean>(false)

    const [validForm, setValidForm] = useState<boolean>(false)

    // HOOKS==========================================

    useEffect(() => {
        if (Object.keys(formState).length === config.length) {
            setValidForm(true)
        }

    }, [formState, config.length]);

    // HANDLERS=======================================

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prevProps) => {
            return { ...prevProps, [name]: value }
        })
    }

    const onClickHandler = () => {

        Object.keys(formState).forEach((item) => validationForm(item))

        // console.log('STATES', formState);
        // console.log('ERRORS', inputErrors);
        setShowErrors(true)

    }

    // VALIDATION============================
    const validationForm = (stateKey: string) => {
        switch (stateKey) {
            case 'email':
                if (utils.isEmpty(formState[stateKey])) {
                    setInputErrors((prevProps) => {
                        return { ...prevProps, [stateKey]: 'Email cannot be empty!' }
                    })
                } else {
                    if (utils.isRightEmail(formState[stateKey])) {
                        setInputErrors((prevProps) => {
                            return { ...prevProps, [stateKey]: 'Incorrect Email' }
                        })
                    } else {
                        setInputErrors((prevProps) => {
                            return { ...prevProps, [stateKey]: '' }
                        })
                    }
                }
                break


            case 'login':
                if (utils.isEmpty(formState[stateKey])) {
                    setInputErrors((prevProps) => {
                        return { ...prevProps, [stateKey]: 'Login cannot be empty!' }
                    })
                } else {
                    if (utils.isRightLengthLogin(formState[stateKey])) {
                        setInputErrors((prevProps) => {
                            return { ...prevProps, [stateKey]: 'Incorrect login' }
                        })

                    } else {
                        setInputErrors((prevProps) => {
                            return { ...prevProps, [stateKey]: '' }
                        })
                    }
                }
                break

            case 'password':
                if (utils.isEmpty(formState[stateKey])) {
                    setInputErrors((prevProps) => {
                        return { ...prevProps, [stateKey]: 'Password cannot be empty!' }
                    })

                } else {
                    if (utils.isRightLengthPassword(formState[stateKey])) {
                        setInputErrors((prevProps) => {
                            return { ...prevProps, [stateKey]: 'Incorrect password' }
                        })

                    } else {
                        setInputErrors((prevProps) => {
                            return { ...prevProps, [stateKey]: '' }
                        })
                    }
                }
                break
            case 'repassword':
                if (utils.isEmpty(formState[stateKey])) {
                    setInputErrors((prevProps) => {
                        return { ...prevProps, [stateKey]: 'Please confirm password!' }
                    })

                } else {
                    if (formState[stateKey] !== formState.password) {
                        setInputErrors((prevProps) => {
                            return { ...prevProps, [stateKey]: 'Passwords are not the same' }
                        })

                    } else {
                        setInputErrors((prevProps) => {
                            return { ...prevProps, [stateKey]: '' }
                        })
                    }
                }
                break
            default:
                console.log('Default case')

        }
    }


    return (
        <form className='login-form'>
            <h1 className='login-form__title'>{formTitle}</h1>
            {config.map((item, id) => {
                return <Input
                    onChange={onChangeHandler}
                    className='login-form__input'
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    key={`${id}+${item.name}`}
                    errors={inputErrors[item.name]}
                    showErrors={showErrors}
                />
            })}
            <button disabled={!validForm} onClick={onClickHandler} className={validForm ? 'login-form__button' : 'login-form__button disabled'} type='button'>{buttonText}</button>
            <Link to={link} className='login-form__link' >{linkText}</Link>
        </form>
    );
}

export default FormBuilder;
