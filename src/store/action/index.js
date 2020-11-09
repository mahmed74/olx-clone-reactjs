// here actions will be defined in functions like receive data from firebase or send etc

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../../features/userSlice";
// import { appReducer } from "../../features/appSlice";



export default configureStore({
    reducer: {
        user: userSlice,
        // app: appReducer,
    },
});