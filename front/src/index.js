import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './Nav';
import { Main } from './Main';
import { Login } from './Login';
import { Admin } from './Admin';
import { User } from './User';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

<Routes>
<Route path='/' element={<Nav />} >
<Route index element={<Main/>} />
<Route path='/Login' element={<Login/>}/>
<Route path='/Admin' element={<Admin/>}/>
<Route path='/User' element={<User/>}/>
</Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
