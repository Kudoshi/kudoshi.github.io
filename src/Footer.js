import { Link } from "react-router-dom";
export default function Footer(){

    return (
        <div className="bg-dark row py-2 container-fluid" style={{margin:"0px"}}>
            <div className="col-12 col-md-4"></div>
            <div className="col-12 col-md-4 d-flex justify-content-center text-white py-2">
                <Link to="/" className="un-underline text-white px-2">Homepage</Link> | 
                <Link to="/project" className="un-underline text-white px-2">Project</Link> | 
                <Link to="/contact" className="un-underline text-white px-2">Contact</Link>
            </div>
            <div className="col-12 col-md-4 text-end text-white py-2">
                Made with
                <i class="bi bi-heart-fill px-2" style={{color: "rgb(255, 11, 11)"}}></i>
                with React
            </div>
        </div>
        
    );
}