import { createSlice, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, PAUSE, FLUSH, REHYDRATE, PURGE, PERSIST, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Initial state of the application
const initialStateValue = {
  loginInfo: null,
  token: null,
  lastName: null,
  userName: null,
  firstName: null,
};

// Creation of a 'slice' to manage user state
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
      state.token = null;
      state.loginInfo = null;
      state.lastName = null;
      state.userName = null;
      state.firstName = null;
    },
  },
});

// Configuring persistence for Redux state
const config = {
  key: "root",
  storage,
};
// Persistent reducer for the Redux store
const reduxPersist = persistReducer(config, theStore.reducer);

// Redux store configuration
export const store = configureStore({
  reducer: {
    user: reduxPersist
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [PAUSE, FLUSH, REHYDRATE, PURGE, PERSIST, REGISTER]
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