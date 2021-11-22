import * as validation from '../utils';

export const loginConfig = [
    {
        name: 'login',
        placeholder: 'Username',
        type: 'text',
        validation: {
            type: 'isRightLength',
            minLength: 3,
            maxLength: 22
        }
    },
    {
        name: 'password',
        placeholder: 'Password',
        type: 'password',
        validation: {
            type: 'isRightLength',
            minLength: 6,
            maxLength: 22
        }
    }
]
