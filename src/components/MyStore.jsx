import { createSlice, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {persistReducer, PAUSE, FLUSH, REHYDRATE, PURGE, PERSIST, REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialStateValue = {
    loginInfo: null,
    token: null,
    lastName: null,
    userName: null,
    firstName: null,
};
// criacao do meu slice
const theStore = createSlice({
    name: "user",
    initialState: initialStateValue,
    reducers: {
      setLoginInfo: (state, action) => {
        state.loginInfo = action.payload;
      },
      setToken: (state, action) => {
        state.token = action.payload;
      },
      setLastName: (state, action) => {
        state.lastName = action.payload;
      },
      setUserName: (state, action) => {
        state.userName = action.payload;
      },
      setFirstName: (state, action) => {
        state.firstName = action.payload;
      },
      setLogout: (state) => {
        state.token=null;
        state.loginInfo=null;
        state.lastName=null;
        state.userName=null;
        state.firstName=null;
      },
    },
  });

const config = {
  key:"root",
  storage,  
};

const reduxPersist = persistReducer(config, theStore.reducer);

export const store = configureStore({
    reducer: {
      user: reduxPersist
    },
    middleware: getDefaultMiddleware({
      serializableCheck:{
        ignoreActions:[PAUSE, FLUSH, REHYDRATE, PURGE, PERSIST, REGISTER]
      }
    })
  });
  
  export const {
    setLoginInfo, 
    setToken,
    setLastName,
    setUserName,
    setFirstName,
    setLogout,

  } = theStore.actions;