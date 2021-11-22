interface IValuesProps {
    password: string,
    repassword: string
}

export const isSameValue = (values: Array<string>) => (values[0] === values[1])