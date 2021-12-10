import React from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { FormBuilder, MainWrapper } from '../components';

import { registConfig as formConfig } from "../config/configForRegistrFrom";

import { addUserToStore } from '../redux/actions/app/users';

interface IRegProps {
    setRedirect?: any
}

const Registration: React.FC<IRegProps> = () => {
    const dispatch: (obj: object) => void = useDispatch();

    const history = useHistory()

    // OnClickSubmit function 
    const takeDataFromFormBuilder = (formData: any) => {
        dispatch(addUserToStore(formData));
        localStorage.setItem('users', JSON.stringify(formData));
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
