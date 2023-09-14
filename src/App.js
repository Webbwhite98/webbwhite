import './App.css';
import React, {useState} from 'react';
import Header from "./components/navigation/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.css'
import Home from "./components/pages/Home";
import Footer from "./components/navigation/Footer";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
     <BrowserRouter>
         <div className={'dark'}>
             <Header/>
         <Routes>
             <Route path={"/"} element={<Home/>}/>
             <Route path={"/about"} element={<AboutMe/>}/>
             <Route path={"/projects"} element={<Projects/>}/>
             <Route path={"/contact"} element={<Contact/>}/>

         </Routes>
         </div>
         <Footer/>
     </BrowserRouter>
  );
}

export default App;
