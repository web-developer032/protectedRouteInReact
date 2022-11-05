import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FancyButton from "./components/FancyButton";
import logProps from "./components/hoc/HOC";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";
import Setting from "./pages/profile/setting/Setting";

function App() {
    const auth = useSelector((state) => state.auth);
    console.log("APP AUTH", auth);

    useEffect(() => {
        console.log("USEEFFECT APP");
    }, []);
    // const ref = React.createRef();
    // const NewFancyButton = logProps(FancyButton);

    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />

                {/* INCASE OF SINGLE ROUTE */}
                <Route
                    path="profile"
                    element={
                        <ProtectedRoute isAllowed={auth.user} redirectedPath="/login">
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                {/* INCASE YOU WANT TO PROTECT SIBLINGS ROUTE AS WELL */}
                <Route
                    path="profile"
                    element={<ProtectedRoute isAllowed={auth.user} redirectedPath="/login" />}
                >
                    <Route index element={<Profile />} />
                    <Route path="setting" element={<Setting />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
