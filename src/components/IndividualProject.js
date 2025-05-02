import { Link } from "react-router-dom";
import { useEffect, useState } from"react";
import { GetViewportSize} from "../misc/Util";
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function IndividualProject(project){

    const [imgWidth, setImgWidth] = useState("250px");
    const [imgHeight, setImgHeight] = useState("141px");

    useEffect(() => {
        // Function to handle resize
        function handleImageResize() {
            var viewportSize = GetViewportSize();
            if (viewportSize.width < 768)
            {
                setImgWidth("140px");
                setImgHeight("80px");
            }
            else{
                setImgWidth("250px");
                setImgHeight("141px");
            }

        }
    
        // Add event listener for resize
        window.addEventListener('resize', handleImageResize);
    
        // Remove event listener when component unmounts
        return () => {
          window.removeEventListener('resize', handleImageResize);
        };
      }, []);

    function DisplayTag(){
        var div = [];
        for (let i = 0; i < project.project.tag.length; i++)
        {
            div.push(<div className="badge BGBrandColorPassive m-1" style={{fontSize: "0.75em"}}>
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
                <div className="py-1">{description[i]}</div>
            );
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
                <PhotoView key={img[i]} src={img[i]}>
                    <img src={img[i]} alt={img[i]} className="my-2 mx-md-3 hover-clickable" style={{width: imgWidth, height: imgHeight}} loading="lazy" id={img[i]}/>
                </PhotoView>

            );
        }

        return div;
    }

    function DisplayToWebsite() 
    {

        if (project.project.projectLink)
        {
            if (project.project.projectLink.length === 0)
            {
                return;
            }

            var div = [];

            for (let i = 0; i < project.project.projectLink.length; i++)
            {
                div.push(
                    <div className="text-center my-2">
                        <div>To {project.project.projectLink[i].linkSite}</div>
                        <Link to={project.project.projectLink[i].linkUrl}>
                            <span className="BrandTextColor bi bi-arrow-right display-2"></span>
                        </Link>
                    </div>
                );
            }
            
            return div;
        }     
        
    }


    return(
        <div>
            <div className="BGDark d-flex flex-column my-2 py-4" id="projectContainer" >
                <PhotoProvider>
                <div className="row m-0">
                    <div className="col-md-3 d-flex flex-column mt-md-4 align-items-center p-4">
                    <PhotoView src={project.project.pictureUrl[0]} key={project.project.projectID}>
                    <img
                        src={project.project.pictureUrl[0]}
                        alt={project.project.pictureUrl[0]}
                        loading="lazy"
                        className="py-2 hover-clickable"
                        style={{ width: "100%", height: "auto" }}
                    />
                    </PhotoView>
                        
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
                        { DisplayToWebsite()}
                    </div> 
                </div>
                <div className="row m-0">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 d-flex text-wrap p-4 justify-content-evenly flex-wrap">
                        { DisplayOtherImage() }
                    </div>
                    
                    <div className="col-md-1"></div>|
                </div>
                </PhotoProvider>
            </div>
        </div>
    );
}