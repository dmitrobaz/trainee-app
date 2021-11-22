import * as validator from "./index";

interface IConfigProps {
    type?: string,
    name?: string,
    maxLength?: number,
    minLength?: number,
    validation?: any,
    password?: any,
    repassword?: any
}

export const selectValidationType = (validationsRule: any, valueToCheck: any, stateKey: string) => {
 
    switch (validationsRule.type) {
        case 'isRightEmail':
            return validator.isRightEmail(valueToCheck)
        case 'isRightLength':
            return validator.isRightLengthLogin(validationsRule.maxLength, validationsRule.minLength, valueToCheck)
        case 'isSameValue':
            return validator.isSameValue(valueToCheck)
        default:
            console.log("Was not validated!");


    }
}