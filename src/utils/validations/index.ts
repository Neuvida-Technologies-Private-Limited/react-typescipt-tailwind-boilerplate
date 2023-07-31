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
export const isReportValidated = (report: string) => {
    if(report === ""){
        return (" is required!");
    }else{
        return "";
    }
}
export const isLocationValidated = (location: string) => {
    if(location === ""){
        return ("Location is required!");
    }else{
        return "";
    }
}