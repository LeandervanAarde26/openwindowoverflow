/* React */
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* Styling */
import "./StyleSource/variables.scss";

/* Components */
import NavBar from "./Components/NavigationBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Components from "./Routes/Components/Components";
import Question from "./Routes/Question/Question.component";
import ValidateUser from "./Routes/ValidateUser/ValidateUser.component";

/* Routes */
import Home from "./Routes/Home/Home.route";
import Login from "./Routes/Login/Login.route";
import Register from "./Routes/Register/Register.route";
import Profile from "./Routes/Profile/Profile.route";
import FollowTags from "./Routes/FollowTags/FollowTags.route";
import Contact from "./Routes/Contact/Contact.route";
import Admin from "./Routes/Admin/Admin.route";
import AskQuestion from "./Routes/Question/AskQuestion";

function App() {
    //Get Location of User
    const location = useLocation();

    return (
        <div className="App">
            <NavBar />
            {location.pathname === "/" ||
            location.pathname === "/Register" ||
            location.pathname === "/UserValidation" ||
            location.pathname === "/Choosetags" ? (
                <TransitionGroup style={{ display: "flex", flex: 1 }}>
                <CSSTransition key={location.key} classNames="slide" timeout={600}>
                    <Routes location={location}>
                        <Route path="/" index element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/uservalidation" element={<ValidateUser/>} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/articles" element={<Home />} />
                        <Route path="/profile/:username/:userId" element={<Profile />} />
                        <Route path="/question/:questionId" element={<Question />} />
                        <Route path="/question/ask" element={<AskQuestion />} />
                        <Route path="/choosetags" element={<FollowTags />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/articles" element={<Home />} />
                    {/* INSERT ROUTES HERE */}
                    </Routes>
                </CSSTransition>
                </TransitionGroup>
            ) : (
                <Routes location={location}>
                    <Route path="/" index element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/auth" element={<ValidateUser/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/articles" element={<Home />} />
                    <Route path="/test" element={<Components />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                    <Route path="/question/:questionId" element={<Question />} />
                    <Route path="/question/ask" element={<AskQuestion />} />
                    <Route path="/choosetags" element={<FollowTags />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin" element={<Admin />} />
                {/* INSERT ROUTES HERE */}
                </Routes>
            )}
            <Footer />
        </div>
    );
}

export default App;
