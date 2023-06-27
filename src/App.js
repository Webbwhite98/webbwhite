import './App.css';
import React, {useState} from 'react';
import Header from "./components/navigation/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.css'
import Home from "./components/pages/Home";

function App() {
     const [theme, setTheme] = useState('dark')
  return (
     <BrowserRouter>
         <div className={'dark'}>
             <Header/>


         <Routes>
             <Route path={"/"} element={<Home/>}/>

         </Routes>
         </div>
     </BrowserRouter>
  );
}

export default App;
