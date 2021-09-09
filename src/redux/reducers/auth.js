import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: null,
   	isAuth: false,
   	authInfoLoaded: false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setProfile(state, action){
        	state.profile = action.payload;
        },
        setIsAuth(state, action){
        	state.isAuth = action.payload;
        },
        setAuthInfoLoaded(state, action){
        	state.authInfoLoaded = action.payload;
        }
    },
})

export const {
    setProfile,
    setIsAuth,
    setAuthInfoLoaded
} = auth.actions
export default auth.reducer;