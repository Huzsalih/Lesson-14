
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Home from "./Home";
import Features from "./Features";
import Enterprise from "./Enterprise";
import Support from "./Support";


const App = () => {
  return (
    <Router>
      <div div className="d-flex flex-column vw-100">

        <Header />



        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/support" element={<Support />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
