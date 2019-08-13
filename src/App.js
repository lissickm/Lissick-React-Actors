import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
