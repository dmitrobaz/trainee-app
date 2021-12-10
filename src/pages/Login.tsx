import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { FormBuilder, MainWrapper } from '../components';

import { setAuthenticated } from '../redux/actions/app/states';

import { loginConfig as formConfig } from '../config/configForLoginForm';

interface ILogin {
    isSameLoginPassword: (formData: any, userData: any) => boolean,
    dispatch: (obj: object) => void,
    history: () => void
}

type formDataType = { [name: string]: string }
type dataBaseType = [{ [name: string]: string }]
const Login: React.FC<ILogin> = () => {
    // States for error when login not exist in local storage
    const [errorLogIn, setErrorSingUp] = useState<string>('')
    const [successfulLogIn, setSuccessfulLogIn] = useState<string>('')

    const dispatch = useDispatch();
    const users = useSelector(({ app }: { [name: string]: any }) => app.users)

    // Check password and login from input states(formData) with data in local storage 
    const isSameLoginLocalStorage =
        (formData: { [name: string]: string }, localStorageData: { [name: string]: string }) =>
            (formData.login === localStorageData.login)

    const isSamePasswordLocalStorage =
        (formData: formDataType, localStorageData: { [name: string]: string }) =>
            (formData.password === localStorageData.password)

    // Check password and login from input states(formData) with data in Redux storage 
    const isSameLoginRedux =
        (formData: formDataType, dataBase: dataBaseType) => {
            return dataBase.some((item: any) => formData.login === item.login)
        }

    const isSamePasswordRedux =
        (formData: formDataType, dataBase: any) => formData.password === dataBase.password


    const takeDataFromFormBuilder: (formData: any) => void = (formData) => {
        const stringDataFromLocalStorage: string | null = localStorage.getItem('users')
        const userDataFromLocalStorage = JSON.parse(stringDataFromLocalStorage || 'Empty local storage')

        if (!userDataFromLocalStorage && (users.length === 0)) {
            setErrorSingUp('User data base is empty')
            return
        }

        if (isSameLoginRedux(formData, users) || isSameLoginLocalStorage(formData, userDataFromLocalStorage)) {
            setSuccessfulLogIn('Successful log in')
            localStorage.setItem('auth', 'true')
            setTimeout(() => dispatch(setAuthenticated(true)), 500)
            return
        }
        setErrorSingUp('Wrong login');
    }
    return (
        <>
            <div className='log-in-info'>
                {errorLogIn !== '' ? <span className='log-in log-in-error'>{errorLogIn}</span> : ""}
                {successfulLogIn !== '' ? <span className='log-in log-in-success'>{successfulLogIn}</span> : ""}
            </div >
            <MainWrapper >
                <Helmet>
                    <title>Login page</title>
                </Helmet>
                <FormBuilder
                    takeData={(obj: object) => takeDataFromFormBuilder(obj)}
                    config={formConfig}
                    buttonText="Login"
                    formTitle="Login"
                    linkText="Forgot password"
                    link="/registration"
                    errorSingUp={errorLogIn}
                />
            </MainWrapper>
        </>



    );
}

export default Login;
