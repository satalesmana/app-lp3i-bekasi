import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: null,
            email: null,
            gender: null,
            dateOfBirth: null,
            address: null
        }
    },
    reducers: {
        setUsers: (state, action) => {
            state.user = {...state.user, ...action.payload}
        }
    }
})

// Action creators are generated for each case reducer function
export const { setUsers } = userSlice.actions

export default userSlice.reducer