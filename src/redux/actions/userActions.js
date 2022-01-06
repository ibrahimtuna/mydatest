export const ACTION_TYPES = {
    LOGIN : "LOGIN",
    LOGOUT: "LOGOUT"
}

const login = token => ({
    type: ACTION_TYPES.LOGIN,
    payload: {
        token
    }
});

const logout = () => ({
    type: ACTION_TYPES.LOGOUT
})

export {login,logout};
