import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* Styling for App.js will be done in variables.scss */
import "./StyleSource/variables.scss";

/* Imports for components */
import NavBar from "./Components/NavigationBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Routes/Home/Home.route";
import Login from "./Routes/Login/Login.route";
import Register from "./Routes/Register/Register.route";
import Contact from "./Routes/Contact/Contact.route";
import Profile from "./Routes/Profile/Profile.route";
import Question from "./Routes/Question/Question.component";

function App() {
  //Get Location of User
  const location = useLocation();

  return (
    <div className="App">
      <NavBar />
      {location.pathname === "/" || location.pathname === "/Register" ? (
        <TransitionGroup style={{ display: "flex", flex: 1 }}>
          <CSSTransition key={location.key} classNames="slide" timeout={600}>
            <Routes location={location}>
              <Route path="/" index element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Question" element={<Question />} />
              <Route path="/Contact" element={<Contact />} />
              {/* INSERT ROUTES HERE */}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      ) : (
        <Routes location={location}>
          <Route path="/" index element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Articles" element={<Home />} />
          {/* <Route path="/test" element={<Components />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/Contact" element={<Contact />} />
          {/* INSERT ROUTES HERE */}
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
