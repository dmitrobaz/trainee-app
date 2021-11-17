import React from 'react';
import { FormBuilder } from '../components';



const Login: React.FC = () => {
    const formConfig = [
        { name: 'login', placeholder: 'Username', type: 'text' },
        { name: 'password', placeholder: 'Password', type: 'password' }]

    return (
        <FormBuilder
            config={formConfig}
            buttonText="Login"
            formTitle="Login"
            linkText="Forgot password"
            link="/registration"
        />
    );
}

export default Login;
