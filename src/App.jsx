import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Import the Navbar component
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/login" element={<Login onLogin={handleLogin} />} /> */}
      </Routes>
      <Footer /> {/* Render the Footer component */}
    </>
  );
}

export default App;
