import React, { useState } from 'react';
import { FormBuilder, MainWrapper } from '../components';
import { loginConfig as formConfig } from '../config/configForLoginForm';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addUserToStore } from '../redux/actions/app/addUserToStore';



interface ILogin {
    isSameLoginPassword: (formData: any, userData: any) => boolean,
    dispatch: (obj: object) => void,
    history: () => void
}

const Login: React.FC<ILogin> = () => {

    // STATETS===================================
    // States for error when login not exist in local storage
    const [errorSingUp, setErrorSingUp] = useState<string>('')
    const [successfulLogIn, setSuccessfulLogIn] = useState<string>('')


    // CONSTANTS================================= 
    const dispatch = useDispatch();
    const users = useSelector(({ app }: { [name: string]: any }) => app.users)
    const history = useHistory()

    // FUNCTIONS=================================
    // Check password and login from input states(formData) with data in local storage 
    const isSameLoginLocalStorage =
        (formData: { [name: string]: string }, localStorageData: { [name: string]: string }) =>
            (formData.login === localStorageData.login)

    // const isSamePasswordLocalStorage =
    //     (formData: { [name: string]: string }, localStorageData: { [name: string]: string }) =>
    //         (formData.password === localStorageData.password)

    // Check password and login from input states(formData) with data in Redux storage 
    const isSameLoginRedux =
        (formData: { [name: string]: string }, dataBase: any) => dataBase.some((item: any) => formData.login === item.login)

    // const isSamePasswordRedux =
    //     (formData: { [name: string]: string }, dataBase: { [name: string]: string }) =>
    //         (formData.password === dataBase.password)


    const takeDataFromFormBuilder: (formData: any) => void = (formData) => {
        const dirtyDataFromLocalStorage: any = localStorage.getItem('users')
        const userDataFromLocalStorage = JSON.parse(dirtyDataFromLocalStorage)

        if (!userDataFromLocalStorage || (users.length === 0)) {
            setErrorSingUp('User data base is empty')
            return
        }

        if (isSameLoginRedux(formData, users) || isSameLoginLocalStorage(formData, userDataFromLocalStorage)) {
            setSuccessfulLogIn('Successful log in')
            history.push('/products')
            localStorage.setItem('auth', 'true')
            return
        }

        setErrorSingUp('Wrong login');


    }
    return (

        <div style={{
            display: 'flex', position: 'relative', justifyContent: 'center'
        }}>
            {errorSingUp !== ''
                ? <span style={{
                    position: 'absolute',
                    top: "95px",
                    textAlign: 'center',
                    width: '52%',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#ff7676',
                }}>{errorSingUp}</span>
                : ""
            }
            {
                successfulLogIn !== ''
                    ? <span style={{
                        position: 'absolute',
                        top: "95px",
                        textAlign: 'center',
                        width: '52%',
                        padding: '10px',
                        borderRadius: '5px',
                        backgroundColor: '#81ffb7',
                    }}>{successfulLogIn}</span>
                    : ""
            }
            <MainWrapper >

                <FormBuilder
                    takeData={(obj: object) => takeDataFromFormBuilder(obj)}
                    config={formConfig}
                    buttonText="Login"
                    formTitle="Login"
                    linkText="Forgot password"
                    link="/registration"
                    errorSingUp={errorSingUp}
                />

            </MainWrapper>



        </div >
    );
}

export default Login;
