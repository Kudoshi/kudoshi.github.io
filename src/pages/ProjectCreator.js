import { useState, useEffect } from "react";
import data from "../json/Project.json";

export default function ProjectCreator()
{
    return(
        <div>
            <div className="text-center display-6 my-4">
                Project Creator Page
            </div>

            { DisplayCreatorForm() }

            { DisplayDataForm() }
        </div>
        
    );
}

function DisplayCreatorForm()
{
    const [formData, setFormData] = useState({
        projectID: '',
        projectTitle: '',
        date: '',
        description: '',
        projectType: 'GAME',
        tag: '',
        projectLink: '',
        pictureUrl: []
      });
    
    const [numOfImg, setNumOfImg] = useState(0);

    useEffect(() => {
        setProjectID();
    }, []);

    const setProjectID = () =>{
        var projectID = 0;
        if (data.length > 0)
        {
            var projectID = parseInt(data[data.length-1].projectID);
            projectID ++;
        }
        
        setFormData(prevData => ({
            ...prevData,
            projectID: projectID.toString() // Assuming projectID is a string in formData
        }));
    }


    const handleTagChange = (e) => {
        const { value } = e.target;

        // Convert the comma-separated tags into an array
        let tagsArray;
        if (value.includes(","))
        {
            tagsArray = value.split(',').map(tag => tag.trim());
        }
        else{
            tagsArray = [value];
        }

        setFormData(prevData => ({
            ...prevData,
            tag: tagsArray
        }));
    }
 
    const handleImgNumChange = (e) => {
        const { value } = e.target;
        
        setNumOfImg(value);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        })); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let descriptionArray;

        if (formData.description.includes('\n')) {
            descriptionArray = formData.description.split('\n').map(line => line.trim());
        } else {
            descriptionArray = [formData.description];
        }

        const pictureUrls = Array.from({ length: numOfImg }, (_, index) => `./images/project/project_${formData.projectID + 1}_${index + 1}.png`);
        const updatedFormData = {
            ...formData,
            description: descriptionArray,
            pictureUrl: [...formData.pictureUrl, ...pictureUrls]
        };

        // Copy the JSON to the clipboard
        navigator.clipboard.writeText(JSON.stringify(updatedFormData, null, 4))
        .then(() => {
            alert('Form data JSON copied to clipboard');
        })
        .catch((err) => {
            alert('Failed to copy form data JSON to clipboard:', err);
        });

    
        console.log(updatedFormData);
    };

    return (
        <div className="container">
            <h2>Fill in Project Data</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label>Project ID:</label>
                <input type="text" name="projectID" value={formData.projectID} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                <label>Project Title:</label>
                <input type="text" name="projectTitle" value={formData.projectTitle} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                <label>Date:</label>
                <input type="text" name="date" value={formData.date} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                <label>Description:</label>
                <textarea name="description" rows="6" value={formData.description} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                <label>Project Type:</label>
                <select name="projectType" value={formData.projectType} onChange={handleChange} className="form-control">
                    <option value="GAME">GAME</option>
                    <option value="PROGRAMMING">PROGRAMMING</option>
                    <option value="VIDEO">VIDEO</option>
                    <option value="ART">ART</option>
                    <option value="OTHER">OTHER</option>
                </select>
                </div>
                <div className="form-group">
                <label>Tag:</label>
                <input type="text" name="tag" value={formData.tag} onChange={handleTagChange} className="form-control" />
                <small className="form-text text-muted">Separate tags by comma (e.g., tag1, tag2, tag3)</small>
                </div>
                <div className="form-group">
                <label>Project Link:</label>
                <input type="text" name="projectLink" value={formData.projectLink} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                <label>Number of Images:</label>
                <input type="number" name="numberOfImages" value={numOfImg} onChange={handleImgNumChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

function DisplayDataForm()
{
    return (
        <div className="p-4">
            <table className="table table-striped m-0">
                <thead className="thead-dark">
                    <tr>
                        <th>Project ID</th>
                        <th>Project Title</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Project Type</th>
                        <th>Tag</th>
                        <th>Project Link</th>
                        <th>Project Url</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(project => (
                        <tr key={project.projectID}>
                        <td>{project.projectID}</td>
                        <td>{project.projectTitle}</td>
                        <td>{project.date}</td>
                        <td>
                            <ul>
                            {project.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                            </ul>
                        </td>
                        <td>{project.projectType}</td>
                        <td>
                            <ul>
                            {project.tag.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                            </ul>
                        </td>
                        <td>
                            {
                                project.projectLink.map((link, index) =>{
                                    return  <div>{link.linkSite} | {link.linkUrl}</div>
                                })
                                
                            }
                        </td>
                        <td>
                            <ul>
                            {project.pictureUrl.map((url, index) => (
                                <li key={index}><img src={"/Kudoshi-website/"+url} alt={`Image ${index + 1}`} style={{width: "100px", height:"auto"}}/></li>
                            ))}
                            </ul>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}