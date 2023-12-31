import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./components/MyStore";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import EditUserName from './pages/EditUserName';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
        <Route path='/User' element={<User />}></Route>
        <Route path='/EditUserName' element={<EditUserName />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();