import React from 'react';

import { FormBuilder } from '../components';
import { registConfig as formConfig } from "../config/configForRegistrFrom";

const Registration: React.FC = () => {

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
