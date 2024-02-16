import projectJSON from "../json/Project.json";

export default function ProjectOverview() {

    const PROJECT_SHOW_COUNT = 2;

    function ProjectCard() {
        var div = [];
        
        for (let i = projectJSON.length-PROJECT_SHOW_COUNT; i<projectJSON.length; i++)
        {
            div.push(   
                <a href="https://www.facebook.com"
                className="p-3 d-flex flex-column justify-content-center bg-light my-2" style={{width:"250px", height: "400px"}}>
                    <img src={projectJSON[i].pictureUrl[0]} style={{width:"100%", height:"auto"}}></img>
                    <h1 className="h4">{projectJSON[i].projectTitle}</h1>
                    {/* <p className="fs-5">{projectJSON[i].description}</p> */}
                    <p className="fs-6 text-end fw-bold">{projectJSON[i].projectType}</p>
                </a>

            ); 
        };

        return div;
    }

    return (
        <div className="d-flex justify-content-center p-md-5">
            <div className="d-flex BGBrandColor p-md-5 w-75 rounded">
                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center w-100 bg-primary">
                    {ProjectCard()}
                </div>
            </div>
        </div>
    )
} 