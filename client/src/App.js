/* All React Hooks will be imported here */
import React, { useState } from 'react';
// import { Routes, Route } from 'react-router';
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
/* Styling for App.js will be done in variables.scss */
import './StyleSource/variables.scss';
/* Imports for components */
import NavBar from './Components/NavigationBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Routes/Home/Home.route';
import Login from './Routes/Login/Login.route';
import Register from './Routes/Register/Register.route';

function App() {
    const pathName = useLocation();

    return (
        <div className='App'>
            <NavBar />
            {pathName.pathname === '/' || pathName.pathname === "/Register" || pathName.pathname === "/Home"
                ?
                <TransitionGroup>
                    <CSSTransition key={pathName.key} classNames="slide" timeout={600}>
                        <Routes location={pathName}>
                            <Route path='/' index element={<Login />} />
                            <Route path='/Register' element={<Register />} />
                            <Route path='/Home' element={<Home />} />

                            {/* INSERT ROUTES HERE */}
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
                :
                <Routes location={pathName}>
                    <Route path='/' index element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/Home' element={<Home />} />
                     {/* INSERT ROUTES HERE */}
                </Routes>
            }
            <Footer />
        </div>
    )
}

export default App;