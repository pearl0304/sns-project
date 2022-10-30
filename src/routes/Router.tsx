import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";

// COMPONENTS
import {Login} from "./Login";
import {SignUp} from "./SignUp";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Login/>}></Route>
                <Route path={'/signup'} element={<SignUp/>}></Route>
            </Routes>
        </Router>
    )
}