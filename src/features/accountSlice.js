import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: null,
    email: null,
    name: null,
    gio_hang_id: null,

}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        LoginSuccess: (state, action) => {
            // console.log('redux', action.payload)
            state.id = action.payload.user.id
            state.email = action.payload.info.email
            state.name = action.payload.user.ten
            state.gio_hang_id = action.payload.user.gio_hang_id

        },
        Logout: (state, action) => {
            state.id = null
            state.email = null
            state.name = null

        },
    },
})

// Action creators are generated for each case reducer function
export const { LoginSuccess } = accountSlice.actions
export const { Logout } = accountSlice.actions

export default accountSlice.reducer