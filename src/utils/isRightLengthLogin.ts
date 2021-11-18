export const isRightLengthLogin = (maxLength: number, minLength: number, item: string,) => {
    if (item.length < minLength || item.length > maxLength) {
        return true
    } else {
        return false
    }
}