import { Link } from "react-router-dom";
import { useEffect, useState } from"react";
import { GetViewportSize} from "../misc/Util";

export default function IndividualProject(project){

    const [imgWidth, setImgWidth] = useState("250px");
    const [imgHeight, setImgHeight] = useState("141px");

    useEffect(() => {
        // Function to handle resize
        function handleImageResize() {
            var viewportSize = GetViewportSize();
            console.log(viewportSize);
            if (viewportSize.width < 768)
            {
                setImgWidth("140px");
                setImgHeight("80px");
            }
            else{
                setImgWidth("250px");
                setImgHeight("141px");
            }

            console.log('Window has been resized');
        }
    
        // Add event listener for resize
        window.addEventListener('resize', handleImageResize);
    
        // Remove event listener when component unmounts
        return () => {
          window.removeEventListener('resize', handleImageResize);
        };
      }, []);


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
                <img src={"/Kudoshi-website/"+img[i]} alt={img[i]} key={img[i]} className="my-2 mx-md-3" style={{width: imgWidth, height: imgHeight}} id={img[i]}/>
            );
        }

        return div;
    }

    return(
        <div >
            <div className="BGBrandColor d-flex flex-column my-2 py-4" id="projectContainer">
                <div className="row m-0">
                    <div className="col-md-3 d-flex flex-column mt-md-4 align-items-center p-4">
                        <img src={"/Kudoshi-website/"+project.project.pictureUrl[0]} alt={project.project.pictureUrl[0]} key={project.project.projectID} 
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
                <div className="row m-0">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 d-flex text-wrap p-4 justify-content-evenly flex-wrap">
                        { DisplayOtherImage() }
                    </div>
                    
                    <div className="col-md-1"></div>|
                </div>
            </div>
        </div>
    );
}