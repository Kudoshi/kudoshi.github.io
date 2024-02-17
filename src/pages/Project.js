import { useState, useEffect } from "react";
import projectJSON from "../json/Project.json";
import IndividualProject from "../components/IndividualProject";

export default function Project({filter}){

    const [project, setProject] = useState(projectJSON);
    const [currentProjectType, setCurrentProjectType] = useState('ALL');
    const [projectLabel, setProjectLabel] = useState("All Project");
    
    useEffect(() => {
      ProjectFilterAll();
    }, [])
    

    function ProjectFilterAll()
    {

        setProject(projectJSON);
        setCurrentProjectType("ALL");
        setProjectLabel(projectJSON.length + " All Project");
    }
    
    function ProjectFilterGame()
    {
        let projects = projectJSON.filter(proj => proj.projectType === "GAME");
        
        setProject(projects);
        setCurrentProjectType("GAME");
        console.log("Filter Game");
        setProjectLabel(projects.length + " Game Project");
    }

    function ProjectFilterProgramming()
    {
        let projects = projectJSON.filter(proj => proj.projectType === "PROGRAMMING")

        setProject(projects);
        setCurrentProjectType("PROGRAMMING");
        setProjectLabel(projects.length + " Programming Project");

    }

    function ProjectFilterVideo()
    {
        let projects = projectJSON.filter(proj => proj.projectType === "VIDEO")

        setProject(projects);
        setCurrentProjectType("VIDEO");
        setProjectLabel(projects.length + " Video Project");

    }

    function ProjectFilterArt()
    {
        let projects = projectJSON.filter(proj => proj.projectType === "ART")

        setProject(projects);
        setCurrentProjectType("ART");
        setProjectLabel(projects.length + " Art Project");

    }

    function ProjectFilterOther()
    {
        console.log("Others")
        let projects = projectJSON.filter(proj => proj.projectType === "OTHER")

        setProject(projects);
        setCurrentProjectType("OTHER");
        setProjectLabel(projects.length + " Other Project");

    }

    function DisplayProjects()
    {
        if (project.length === 0)
            return (<div style={{minHeight:"250px"}} className="text-black text-center m-4 p-4">
                No Projects Yet
            </div>);

        return project.map(record =>{
            console.log(record);
            return <IndividualProject project={record}/>
        })     
    }

    function ProjectTypeClass(type)
    {
        if (type === currentProjectType)
        {
            return "hover-clickable fs-5 nav-item p-2 w-100 fw-bold BGBrandColorPassive";
        }
        else return "hover-clickable fs-5 nav-item p-2 w-100";
    }

    return(
        <div className="container-fluid p-0">
            <div className="BGBrandColor text-white d-flex flex-column justify-content-center align-items-center">
                <div className="display-5 py-4 my-2">PROJECT</div>

                <div className="w-100 d-flex flex-column flex-md-row justify-content-evenly align-items-center bg-secondary text-center">
                    <div onClick={ProjectFilterAll} className={ProjectTypeClass("ALL")} >ALL</div>
                    <div onClick={ProjectFilterGame} className={ProjectTypeClass("GAME")}>GAME</div>
                    <div onClick={ProjectFilterProgramming} className={ProjectTypeClass("PROGRAMMING")}>PROGRAMMING</div>
                    <div onClick={ProjectFilterVideo} className={ProjectTypeClass("VIDEO")}>VIDEO</div>
                    <div onClick={ProjectFilterArt} className={ProjectTypeClass("ART")}>ART</div>
                    <div onClick={ProjectFilterOther} className={ProjectTypeClass("OTHER")}>OTHER</div>
                
                </div>
            </div>
            <div>
                <div className="BGBrandColor text-white text-center w-100 p-4 h4">{projectLabel}</div>
                { DisplayProjects()}
            </div>
        </div>
    );
}