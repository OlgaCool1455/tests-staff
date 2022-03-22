export const emailRules = [
    { required: true, message: "please input your password" },
    { type: 'email', message: "the input is not valid e-mail" },
];

export const passwordRules = [
    { required: true, message: "please input your password" },
    { type: "string", min: 6, message: "min length 6"},
];

export const setLocalStorageAuthParams = (email, password) => {
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
}