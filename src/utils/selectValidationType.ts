import * as validator from "./index";

export const selectValidationType = (valid: object, atr: string) => {
    switch (valid.type) {
        case 'isEmpty':
            return validator.isEmpty(atr)
        case 'isRightEmail':
            return validator.isRightEmail(atr)
        case 'isRightLengthLogin':
            return validator.isRightLengthLogin(valid.maxLength, valid.minLength, atr)
        case 'isRightLengthPassword':
            return validator.isRightLengthPassword(atr)
    }
}