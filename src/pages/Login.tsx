import React from 'react';
import { FormBuilder } from '../components';
import { loginConfig as formConfig } from '../config/configForLoginForm';

const Login: React.FC = () => {

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
