export const isEmailValidated = (email: string) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ""){
        return ("Email is required!");
    }else if(!regEx.test(email)) {
        return ("Email is not correct!");
    }else {
        return "";
    }
}
export const isPasswordValidated = (password: string) => {
    if(password === ""){
        return ("Password is required!");
    }else{
        return "";
    }
}