import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FormBuilder } from '../components';
import { registConfig as formConfig } from "../config/configForRegistrFrom";

import { useDispatch } from 'react-redux';
import { addUserToStore } from "../redux/actions/addUserToStore";




interface IUserData {
    [name: string]: string
}
interface IRegProps {
    setRedirect?: any
}

const Registration: React.FC<IRegProps> = ({ setRedirect }) => {

    // CONSTANTS=================================
    const dispatch: (obj: object) => void = useDispatch();
    const history = useHistory()


    // STATETS===================================
    // States for Login,Password,Email,Repassword 
    const [registrationData, setRegistrationData] = useState<IUserData>({})

    // HOOKS=====================================

    // OnClickSubmit function 
    const takeDataFromFormBuilder = (formData: any) => {
        // Add form data to Redux Storage 
        dispatch(addUserToStore(formData));

        // Add form data to local storage 
        localStorage.setItem('users', JSON.stringify(formData));

        // Redirect to login page 
        history.push('/login')
    }

    return (
        <FormBuilder
            takeData={(obj: any) => takeDataFromFormBuilder(obj)}
            config={formConfig}
            buttonText="Register"
            linkText="Member login"
            link="/login"
            formTitle="Registration"
        />
    );
}
export default Registration;
