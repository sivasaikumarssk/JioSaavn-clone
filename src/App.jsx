import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Library } from "./components/Library";
import { HiThere } from "./components/Hithere";
import {TopPlay } from "./components/TopPlaylists";
import { NewReleases } from "./components/NewReleases";
import { Discover } from "./components/Discover";

function App() {
  return (
    <div>
      <Navbar />
      
      <div className="starting-div">
      <Library/>
      <HiThere/>
      </div>
      
     
      <TopPlay/>
      <NewReleases/>
      <Discover/>
    </div>
  );
}

export default App;


