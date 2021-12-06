import React from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { FormBuilder, MainWrapper } from '../components';

import { registConfig as formConfig } from "../config/configForRegistrFrom";

import { addUserToStore } from "../redux/actions/app";




// interface IUserData {
//     [name: string]: string
// }
interface IRegProps {
    setRedirect?: any
}

const Registration: React.FC<IRegProps> = () => {

    // CONSTANTS=================================
    const dispatch: (obj: object) => void = useDispatch();
    const history = useHistory()


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
        <MainWrapper  >
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <FormBuilder
                takeData={(obj: any) => takeDataFromFormBuilder(obj)}
                config={formConfig}
                buttonText="Register"
                linkText="Member login"
                link="/login"
                formTitle="Registration"
            />
        </MainWrapper>
    );
}
export default Registration;
