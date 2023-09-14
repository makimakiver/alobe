// user action
export const LoginStart = (user) => ({
    type: "LOGIN_START",
    // name of action
})
export const LoginSuccess = (user) => ({
    // user store the state of user
    type: "LOGIN_SUCCESS",
    payload: user,
    // state of the user
})
export const LoginError = (error) => ({
    type: "LOGIN_ERROR",
    payload: error, 
})
