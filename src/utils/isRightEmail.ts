import { RE_EMAIL } from '../const/regular';

export const isRightEmail = (item: string) => {
    if (RE_EMAIL.test(String(item).toLowerCase())) {
        return false
    } else {
        return true
    }
}
