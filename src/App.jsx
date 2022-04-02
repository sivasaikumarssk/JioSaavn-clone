import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";

import { HomePageEle } from "./components/HomePageEle";
import { Routes, Route } from "react-router-dom";

import {Routing} from "./Routes/routes"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageEle />} />
        <Route path="/browse/*" element={<Routing/>}/>
      </Routes>
    </div>
  );
}

export default App;
