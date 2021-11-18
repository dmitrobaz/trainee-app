import * as validation from '../utils';

export const registConfig = [
    { name: 'email', placeholder: 'Email', type: 'email', validation: { type: 'isRightEmail' } },
    { name: 'login', placeholder: 'Username', type: 'text', validation: { type: 'isRightLengthLogin', minLength: 3, maxLength: 22 } },
    { name: 'password', placeholder: 'Password', type: 'password', validation: { type: 'isRightLengthLogin', minLength: 3, maxLength: 22 } },
    { name: 'repassword', placeholder: 'Confirm password', type: 'password', validation: { type: 'isRightLengthLogin', minLength: 3, maxLength: 22 } }]