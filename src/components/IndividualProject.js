import { Link } from "react-router-dom";
import { useEffect } from"react";

export default function IndividualProject(project){



    function GetWebsiteName(url) {
        // Remove 'www.' if it exists
        url = url.replace('www.', '');

        // Remove 'https://' or 'http://' if they exist
        url = url.replace('https://', '').replace('http://', '');

        // Find the indices of the first and second dots
        var firstDotIndex = url.indexOf('.');
        var secondDotIndex = url.indexOf('.', firstDotIndex + 1);

        // Extract the middle part between the first and second dots
        var websiteName = url.substring(firstDotIndex + 1, secondDotIndex);

        // Uppercase the first letter
        websiteName = websiteName.charAt(0).toUpperCase() + websiteName.slice(1);
        return websiteName;
    }

    function DisplayTag(){
        var div = [];
        for (let i = 0; i < project.project.tag.length; i++)
        {
            div.push(<div className="badge bg-secondary m-1" style={{fontSize: "0.75em"}}>
                {project.project.tag[i]} 
            </div>);
        }

        return div;
    }

    function DisplayDescription()
    {
        var description = project.project.description;
        var div = [];

        for (let i = 0; i < description.length; i++)
        {
            div.push(
                <div>{description[i]}</div>
            );
            div.push(<br/>);
        }
        
        return div;
    }

    function DisplayOtherImage()    
    {
        var img = project.project.pictureUrl;
        var div = [];

        for (var i = 1; i < img.length; i++)
        {
            div.push(
                <img src={"./Kudoshi-website/"+img[i]} alt={img[i]} key={img[i]} className="p-2 " style={{width:"300px", height:"169px"}} />
            );
        }

        return div;
    }

    return(
        <div className="w-100 my-3">
            <div className="BGBrandColor d-flex flex-column" id="projectContainer">
                <div className="row py-4">
                    <div className="col-md-3 d-flex flex-column mt-md-4 align-items-center p-4">
                        <img src={"./Kudoshi-website/"+project.project.pictureUrl[0]} alt={project.project.pictureUrl[0]} key={project.project.projectID} 
                            className="py-2" style={{width: "100%", height:"auto"}}></img>
                        <div>
                            {
                                DisplayTag()
                            }
                        </div>
                    </div>
                    <div className="col-md-7 text-white text-center">
                        <div className="display-6 text-wrap px-2">{project.project.projectTitle}</div>
                        <div style={{fontSize:"0.8em"}} className="p-2">{project.project.date}</div>
                        <div className="px-4 pt-2 fs-6 text-wrap">{DisplayDescription()}</div>
                    </div>
                    <div className="col-md-2 d-flex flex-column justify-content-center align-items-center text-white">
                        <div>To {GetWebsiteName(project.project.projectLink)}</div>
                        <Link to={project.project.projectLink}>
                            <span className="bi bi-arrow-right display-2"></span>
                        </Link>
                    </div> 
                </div>
                <div className="row d-flex text-wrap p-4 justify-content-evenly">
                    { DisplayOtherImage() }
                </div>
            </div>
        </div>
    );
}