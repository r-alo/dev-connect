import logo from './logo.svg';
import './App.css';
import React from 'react';
import FreelanceHighlight from './components/freelanceHighlight';
import TemplateForm from './components/templateForm';
import RecruiterProfile from './components/recruiterProfile';
import FreelanceProfile from './components/freelanceProfile';
import MainNav from './components/navBar';
import Login from './components/login';
import NavRecruit from './components/navRecruit';



function App() {
  return (

    <div className="App">
      <header><NavRecruit/></header>
      <br/>
      <br />
      <br />
      <TemplateForm/>
      
    </div>
  );
}

export default App;
