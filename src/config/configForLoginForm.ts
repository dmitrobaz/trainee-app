import * as validation from '../utils';

export const loginConfig = [
    { name: 'login', placeholder: 'Username', type: 'text', validation: { type: 'max' } },
    { name: 'password', placeholder: 'Password', type: 'password', validation: { type: 'max' } },]
