/* React */
import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from "axios";

/* Styling */
import "./StyleSource/variables.scss";

/* Context */
import { ValidUserContext } from "./Contexts/Register.context";

/* Components */
import NavBar from "./Components/NavigationBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Components from "./Routes/Components/Components";
import Question from "./Routes/Question/Question.component";
import ValidateUser from "./Routes/ValidateUser/ValidateUser.component";
import AskQuestion from "./Routes/Question/AskQuestion";

/* Routes */
import Home from "./Routes/Home/Home.route";
import Login from "./Routes/Login/Login.route";
import Register from "./Routes/Register/Register.route";
import Profile from "./Routes/Profile/Profile.route";
import FollowTags from "./Routes/FollowTags/FollowTags.route";
import Contact from "./Routes/Contact/Contact.route";
import Admin from "./Routes/Admin/Admin.route";

function App() {
    //Get Location of User
    const location = useLocation();
    const navigate = useNavigate();
    const [validUser, setValidUser] = useState(false);

    useEffect(() => {
        let val = sessionStorage.getItem("currentUser");
        
        if (val == null || val == '') {
            if(location.pathname != '/register') {
                navigate('/')
            }
        } else {
            axios.get('http://localhost:5001/api/auth/' + val)
            .then(res => {
                if (!res.data) {
                    if(location.pathname != '/register') {
                        navigate('/')
                    }
                    setValidUser(false);
                } else {
                    setValidUser(true);
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, []);

    return (
        <ValidUserContext.Provider value={{validUser, setValidUser}}>
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
        </ValidUserContext.Provider>
    );
}

export default App;