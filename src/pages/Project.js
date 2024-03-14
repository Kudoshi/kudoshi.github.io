import { useState, useEffect } from "react";
import projectJSON from "../json/Project.json";
import IndividualProject from "../components/IndividualProject";
import { parseDateStringToDate } from "../misc/Util";

export default function Project(){
    let projectList = projectJSON;
    const [project, setProject] = useState(projectJSON);
    const [currentProjectType, setCurrentProjectType] = useState('ALL');
    const [projectLabel, setProjectLabel] = useState("All Project");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        projectList = projectJSON.sort((a, b) => parseDateStringToDate(b.date) - parseDateStringToDate(a.date));
        setProject(projectList);
        
        // Scroll to top
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          };
      
          // Event listener to check scroll position
          window.addEventListener('scroll', toggleVisibility);
      
          // Clean up the event listener
          return () => {
            window.removeEventListener('scroll', toggleVisibility);
          };


        ProjectFilterAll();
    }, [])
    

    function ProjectFilterAll()
    {
        setProject(projectList);
        setCurrentProjectType("ALL");
        setProjectLabel(projectList.length + " All Project");
    }
     
    function ProjectFilterGame()
    {
        let projects = projectList.filter(proj => proj.projectType === "GAME");
        
        setProject(projects);
        setCurrentProjectType("GAME");
        setProjectLabel(projects.length + " Game Project");
    }

    function ProjectFilterProgramming()
    {
        let projects = projectList.filter(proj => proj.projectType === "PROGRAMMING")

        setProject(projects);
        setCurrentProjectType("PROGRAMMING");
        setProjectLabel(projects.length + " Programming Project");

    }

    function ProjectFilterVideo()
    {
        let projects = projectList.filter(proj => proj.projectType === "VIDEO")

        setProject(projects);
        setCurrentProjectType("VIDEO");
        setProjectLabel(projects.length + " Video Project");

    }

    function ProjectFilterArt()
    {
        let projects = projectList.filter(proj => proj.projectType === "ART")

        setProject(projects);
        setCurrentProjectType("ART");
        setProjectLabel(projects.length + " Art Project");

    }

    function ProjectFilterOther()
    {
        let projects = projectList.filter(proj => proj.projectType === "OTHER")

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
            return <IndividualProject project={record} key={record.projectID}/>
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

  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };


    return(
        <div className="container-fluid p-0">
            <div className="BGBrandColor text-white d-flex flex-column justify-content-center align-items-center">
                <div className="display-5 py-4 my-2">PROJECT</div>

                <div className="w-100 d-flex flex-column flex-md-row justify-content-evenly align-items-center bg-secondary text-center">
                    <div onClick={ProjectFilterAll} className={ProjectTypeClass("ALL")} >ALL</div>
                    <div onClick={ProjectFilterGame} className={ProjectTypeClass("GAME")}>GAME</div>
                    <div onClick={ProjectFilterProgramming} className={ProjectTypeClass("PROGRAMMING")}>PROGRAMMING</div>
                    {/* <div onClick={ProjectFilterVideo} className={ProjectTypeClass("VIDEO")}>VIDEO</div>
                    <div onClick={ProjectFilterArt} className={ProjectTypeClass("ART")}>ART</div>
                    <div onClick={ProjectFilterOther} className={ProjectTypeClass("OTHER")}>OTHER</div> */}
                
                </div>
            </div>
            <div>
                <div className="BGBrandColor text-white text-center w-100 p-4 h4">{projectLabel}</div>
                { DisplayProjects()}
            </div>
            <div
                variant="primary"
                onClick={scrollToTop}
                style={{
                    display: isVisible ? 'inline-block' : 'none',
                    position: 'fixed',
                    bottom: '50px',
                    right: '50px'
                }}
                className="bi bi-arrow-up-circle-fill text-white fs-1 hover-clickable shadow-m"
                >
            </div>
        </div>
    );
}