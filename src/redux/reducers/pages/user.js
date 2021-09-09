import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    userLoaded: false,
    responseError: false,
    userNotFound: false
}

const userPage = createSlice({
    name: 'userPage',
    initialState,
    reducers: {
        setUser(state, action){
        	state.user = action.payload;
        },
        setUserLoaded(state, action){
        	state.userLoaded = action.payload;
        },
        setError(state, action){
        	state.responseError = action.payload;
        }
    },
})

export const {
    setUser,
    setUserLoaded,
    setError
} = userPage.actions
export default userPage.reducer;