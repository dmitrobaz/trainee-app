export const isRightLengthPassword = (item: string) => {
    if (item.length < 6) {
        return true
    } else {
        return false
    }
}
