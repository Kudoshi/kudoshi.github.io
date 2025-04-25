import projectJSON from "../json/Project.json";
import { Link } from "react-router-dom";
import { parseDateStringToDate } from "../misc/Util";

export default function ProjectOverview() {

    const PROJECT_SHOW_COUNT = 3;

    function ProjectCard() {
        var projectList = projectJSON.sort((a, b) => parseDateStringToDate(a.date) - parseDateStringToDate(b.date));

        var div = [];
        
        for (let i = projectList.length-PROJECT_SHOW_COUNT; i<projectList.length; i++)
        {
            if (!projectJSON[i]) continue;

            div.push(
                <div className="d-flex flex-column justify-content-start align-items-center text-white my-4" key={projectList[i].projectID} style={{maxWidth: "450px", height: "300px"}}>
                    <img src={projectList[i].pictureUrl[0]} alt={projectList[i].projectTitle} style={{width: "95%", height: "100%", objectFit: "cover"}} />
                    <h1 className="h3 text-center text-wrap">
                        {projectList[i].projectTitle}
                    </h1>
                </div>
            ); 
        };

        return div;
    }

    return ( 
        <div className="BGDark d-flex justify-content-center p-md-5">
            <div className="d-flex flex-column BGBrandColor p-md-5 w-md-75 w-100 rounded">
                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center pt-4">
                    {ProjectCard()}
                </div>

                <div className="d-flex justify-content-end align-items-center pb-2 pe-4">
                    <Link to="/project" className="un-underline"><p className="text-brand fs-5 pe-2 font-spartan-bold" style={{margin: "0px", }}>See All Projects</p></Link>
                    <Link to="/project"><i className="bi bi-arrow-right text-brand text-end display-1" style={{margin: "0px"}}></i></Link>
                </div>

            </div>

        </div>
    )
} 