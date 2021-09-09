import {  configureStore } from '@reduxjs/toolkit';



import main from './reducers/main';
import checkKeyModal from './reducers/checkKeyModal';
import editBiographyModal from './reducers/editBiographyModal';
import userPage from './reducers/pages/user';






const store = configureStore({
    reducer: {
        main,
        checkKeyModal,
        editBiographyModal,
        userPage
	},
});

export default store;



