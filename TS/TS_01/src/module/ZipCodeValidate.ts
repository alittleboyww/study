import { StringValidate } from "./validate";

export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidate implements StringValidate {
    isAcceptable(s: string): boolean {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export { ZipCodeValidate };
export { ZipCodeValidate as mainValidate}