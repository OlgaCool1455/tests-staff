export const setLocalStorageAuthParams = (email, password) => {
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
}