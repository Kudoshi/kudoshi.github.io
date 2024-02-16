import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import Homepage from "./Homepage";
import ProjectOverview from "./components/ProjectOverview";


export default function App(){
  return(
    <Routes>
      <Route path="homepage" element={<Homepage/>}/>
      <Route path="projects" element={<ProjectOverview/>}/>
      <Route path="*" element={<Homepage/>}/>
    </Routes>
  )
}