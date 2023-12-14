import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    username: "",
    email: "",
    token: "",
    role: "guest",
    cart: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, username, email, role, cart } = action.payload
            state.name = name;
            state.username = username;
            state.email = email;
            state.role = role;
            state.cart = cart;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        resetUser(state) {
            Object.assign(state, initialState);
        },
    }
})

export const { addUser, setToken, resetUser} = userSlice.actions
export default userSlice.reducer