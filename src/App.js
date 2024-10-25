import React from 'react';
import './App.css'; // Optional für eigene Stile
import Content from './components/layout/content/Content';
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;

