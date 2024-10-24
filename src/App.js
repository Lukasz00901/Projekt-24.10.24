//import logo from "./logo.svg";
import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Content from "./components/layout/content/Content";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Content />
        <Footer />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
      </div>
    </Router>
  );
}

export default App;

