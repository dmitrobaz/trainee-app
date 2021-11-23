import React, { useState, useEffect } from 'react';
import { FormBuilder } from '../components';
import { loginConfig as formConfig } from '../config/configForLoginForm';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addUserToStore } from '../redux/actions/addUserToStore';

interface IDataUser {

}
interface ILogin {
    isSameLoginPassword: (formData: any, userData: any) => boolean,
    dispatch: (obj: object) => void,
    history: () => void
}

const Login: React.FC<ILogin> = () => {

    // STATETS===================================
    // States for error when login not exist in local storage
    const [errorSingUp, setErrorSingUp] = useState<string>('')

    // CONSTANTS================================= 
    const dispatch = useDispatch();
    const usersFromRedux = useSelector(({ dataBase }: { [name: string]: any }) => dataBase.users[0] ? dataBase.users[0] : { login: '' })
    const history = useHistory()

    // FUNCTIONS=================================
    // Check password and login from input states(formData) with data in local storage 
    const isSameLoginPasswordLocalStorage =
        (formData: { [name: string]: string }, localStorageData: { [name: string]: string }) =>
            (formData.login === localStorageData.login)
            && (formData.password === localStorageData.password)

    // Check password and login from input states(formData) with data in Redux storage 
    const isSameLoginPasswordRedux =
        (formData: { [name: string]: string }, dataBase: { [name: string]: string }) =>
            (formData.login === dataBase.login)
            && (formData.password === dataBase.password)


    const takeDataFromFormBuilder: (formData: any) => void = (formData) => {
        const dataFromLocalStorage: any = localStorage.getItem('users')
        const userData = JSON.parse(dataFromLocalStorage)

        if (isSameLoginPasswordRedux(formData, usersFromRedux)) {
            dispatch(addUserToStore(userData))
            history.push('/products')
            setErrorSingUp('')
            return
        }

        setErrorSingUp('User with this login does not exist');


    }
    return (

        <div style={{ display: 'flex', position: 'relative' }}>
            {errorSingUp !== ''
                ? <span style={{
                    position: 'absolute',
                    top: "182px",
                    textAlign: 'center',
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#ff7676',
                }}>{errorSingUp}</span>
                : ""
            }
            <FormBuilder
                takeData={(obj: object) => takeDataFromFormBuilder(obj)}
                config={formConfig}
                buttonText="Login"
                formTitle="Login"
                linkText="Forgot password"
                link="/registration"
                errorSingUp={errorSingUp}
            />

        </div >
    );
}

export default Login;
