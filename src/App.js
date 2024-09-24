import React, { useState, useRef, forwardRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SendData from './component/sendData';
import Home from './component/home';
import About from './component/about';
import User from './component/user';
import Item from './component/item';


function App() {



    return (
        <div style={{ textAlign: 'center' }}>
            <BrowserRouter>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/sendData'>Data</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/sendData' element={<SendData />}></Route>
                    <Route path='/users' element={<User />}></Route>
                    <Route path='/item/:name' element={<Item />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
