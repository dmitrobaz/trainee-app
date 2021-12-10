export const getTotalCount = (obj: any) => {
    const objKeys = Object.keys(obj).slice(0, -1)
    return objKeys && objKeys.reduce((acc: Number, curr: string) => acc + obj[curr].count, 1)
}