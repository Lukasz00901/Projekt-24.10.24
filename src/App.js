//import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Content from "./components/layout/content/Content";
//import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
      <div className="main-container">
        <Navbar />
        <Content />
        <Footer />
      </div>
  );
}

export default App;

