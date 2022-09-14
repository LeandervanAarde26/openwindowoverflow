/* All React Hooks will be imported here */
import React, {useState} from 'react';
/* Styling for App.js will be done in variables.scss */
import './StyleSource/variables.scss';
import NavBar from './Components/NavigationBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Routes/Home/Home.route';

function App() {
    return (
        <div className='App'>
            <NavBar/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;