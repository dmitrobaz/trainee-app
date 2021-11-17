import React from 'react';

import { FormBuilder } from '../components';



const Registration: React.FC = () => {

    const formConfig = [
        { name: 'email', placeholder: 'Email', type: 'email' },
        { name: 'login', placeholder: 'Username', type: 'text' },
        { name: 'password', placeholder: 'Password', type: 'password' },
        { name: 'repassword', placeholder: 'Confirm password', type: 'password' }]


    return (
        <FormBuilder
            config={formConfig}
            buttonText="Register"
            linkText="Member login"
            link="/login"
            formTitle="Registration"
        />
    );
}
export default Registration;
