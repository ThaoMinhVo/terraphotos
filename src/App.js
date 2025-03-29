import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages";
import Contact from "./pages/contact";
import Packages from "./pages/packages";
import Thanks from "./pages/thanks";
import Opps from "./pages/oops";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/oops" element={<Opps />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
