import React, { useEffect, useState } from 'react';

import { FormBuilder } from '../components';
import { registConfig as formConfig } from "../config/configForRegistrFrom";

interface IUserData {
    [name: string]: string
}

const Registration: React.FC = () => {

    // States for Login,Password,Email,Repassword 
    const [registrationData, setRegistrationData] = useState<IUserData>({})

    return (
        <FormBuilder
            setData={(obj: any) => setRegistrationData(obj)}
            config={formConfig}
            buttonText="Register"
            linkText="Member login"
            link="/login"
            formTitle="Registration"
        />
    );
}
export default Registration;
