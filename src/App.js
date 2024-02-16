import {
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import Homepage from "./Homepage";
import Project from "./Project";


export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="*" element={<Homepage/>}/>
    </Routes>
  )
}