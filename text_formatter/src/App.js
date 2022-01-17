
import './App.css';
import React,{useState} from 'react';
import Navbar  from './component/Navbar';
import TextForm from './component/TextForm';
import Alerts from './component/Alerts';
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[alerts,setAlert]=useState(null);
  const showlert=(messgae,ty)=>{

  }
  return (
   <div className="main">
    
    <Navbar title="TextUtils"></Navbar>
    <Alerts alert="This is alert" />
    <Router>
    <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="about/*" element={<About />} />
      </Routes>
</Router>

  
    </div>
  );
}

export default App;
