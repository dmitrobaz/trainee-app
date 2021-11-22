import React, { useState, useEffect } from 'react';
import { FormBuilder } from '../components';
import { loginConfig as formConfig } from '../config/configForLoginForm';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addUserToStore } from '../redux/actions/addUserToStore';


interface IUserData {
    [name: string]: string
}

interface ILoginProps {
    setRedirect?: any
}

const Login: React.FC<ILoginProps> = ({ setRedirect }) => {
    const usersObject = useSelector(({ dataBase }: any) => dataBase);
    const dispatch: (obj: object) => void = useDispatch();

    const history = useHistory()

    // STATETS===================================
    // States for Login,Password
    const [registrationData, setRegistrationData] = useState<IUserData>({})

    // HOOKS=====================================
    // Creating a new record in the store redux
    // useEffect(() => {
    //     if ((registrationData.login === usersObject.users[0]?.login)
    //         && (registrationData.password === usersObject.users[0]?.password)) {
    //         // setRedirect(true)

    //         return
    //     }
    // }, [registrationData])

    const isExistUserInStore = () => {
        return localStorage.getItem('users')
    }

    const takeDataFromFormBuilder: any = (formData: any) => {
        // const email = isExistUserInStore()
        const dataFromLocalStorage: any = isExistUserInStore();
        const userData = JSON.parse(dataFromLocalStorage)

        if ((formData.login === userData.login)
            && (formData.password === userData.password)) {
            dispatch(addUserToStore(userData))
            history.push('/')

            return
        }




        // Add form data to local storage 
        // localStorage.setItem('user', JSON.stringify(formData));

        // Redirect to login page 
        // history.push('/login')
    }
    return (
        <FormBuilder
            takeData={(obj: any) => takeDataFromFormBuilder(obj)}
            config={formConfig}
            buttonText="Login"
            formTitle="Login"
            linkText="Forgot password"
            link="/registration"
        />
    );
}

export default Login;
