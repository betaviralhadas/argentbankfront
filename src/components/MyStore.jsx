import { createSlice, configureStore } from "@reduxjs/toolkit";

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
    initialStateValue,
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
    },
  });

export const store = configureStore({
    reducer: {
      user: theStore.reducer,
    },
  });
  
  export const {
    setLoginInfo, 
    setToken,
    setLastName,
    setUserName,
    setFirstName,

  } = theStore.actions;