import projectJSON from "../json/Project.json";
import { Link } from "react-router-dom";

export default function ProjectOverview() {

    const PROJECT_SHOW_COUNT = 3;

    function ProjectCard() {
        var div = [];
        
        for (let i = projectJSON.length-PROJECT_SHOW_COUNT; i<projectJSON.length; i++)
        {
            if (!projectJSON[i]) continue;

            console.log(projectJSON);
            console.log(projectJSON[i].pictureUrl);
            div.push(
                
                <div className="d-flex flex-column justify-content-start align-items-center text-white " key={projectJSON[i].projectID} style={{maxWidth:"450px", height: "300px"}}>
                    <img src={"/Kudoshi-website/"+projectJSON[i].pictureUrl[0]} alt={projectJSON[i].projectTitle} style={{width:"95%", height:"auto"}}></img>
                    <h1 className="h3 text-center text-wrap">{projectJSON[i].projectTitle}</h1>
                </div>
            ); 
        };

        return div;
    }

    return ( 
        <div className="d-flex justify-content-center p-md-5">
            <div className="d-flex flex-column BGBrandColor p-md-5 w-md-75 w-100 rounded">
                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center pt-4">
                    {ProjectCard()}
                </div>

                <div className="d-flex justify-content-end align-items-center pb-2 pe-4">
                    <Link to="/Kudoshi-website/project" className="un-underline"><p className="text-white fs-5 pe-2" style={{margin: "0px", }}>See All Projects</p></Link>
                    <Link to="/Kudoshi-website/project"><i className="bi bi-arrow-right h1 text-white text-end display-1" style={{margin: "0px"}}></i></Link>
                </div>

            </div>

        </div>
    )
} 