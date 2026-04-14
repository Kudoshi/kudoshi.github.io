import {
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";
import ProjectCreator from "./pages/ProjectCreator";


export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/*" element={<Homepage/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/project-creator" element={<ProjectCreator/>}/>
      <Route path="*" element={<Homepage/>}/>
    </Routes>
  )
}