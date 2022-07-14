import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages//Home';
import Modulo1 from "./Pages/Modulo1";
import Header from "./Components/Header";
import Preloader from "./Components/Preloader";
import Aside from "./Components/Aside";
import Them from "./Components/Them";
import Footer from './Components/Footer';
import Modulo2 from './Pages/Modulo2';


function App() {
  return (
    <Router>
      <Preloader/>
      <Header/>
      <Aside/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/modulo1" element={<Modulo1 />} />
        <Route exact path="/modulo2" element={<Modulo2 />} />
      </Routes>
      <Footer/>
      <Them/>
    </Router>
  );
}

export default App;
