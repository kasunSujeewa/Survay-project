import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Content from "./Content";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Questionnaire from "./Questionnaire";
import SurveyComponent from "./SurveyComponent";

const App = () => {
    
    return (
    <Router>
         <Routes>
            <Route path="/"  element={<HomePage/>} />
            <Route path="/questionnaire"  element={<Questionnaire/>} />
         </Routes>
    </Router>
    );
};

export default App;