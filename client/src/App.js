/* All React Hooks will be imported here */
import React, {useState} from 'react';
import { Routes, Route } from 'react-router';
/* Styling for App.js will be done in variables.scss */
import './StyleSource/variables.scss';
import NavBar from './Components/NavigationBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Routes/Home/Home.route';
import Login from './Routes/Login/Login.route';
import Register from './Routes/Register/Register.route';

function App() {
    return (
        <div className='App'>
            <NavBar/>
                <Routes>
                    <Route path='/' index element= {<Login/>}/>
                    <Route path='/Register'element={<Register/>}/>
                    <Route path='/Home' element={<Home/>}/>
                </Routes>
                <Footer/>
        </div>
    );
}

export default App;