import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <div className="container-fluid px-4">
                <div className="d-flex flex-row align-content-center justify-content-center">
                    <a className="navbar-brand" href="/">
                        <img src="./Kudoshi-website/images/website-logo.png" alt="Avatar Logo" style={{width:"50px"}} className="rounded-circle"/> 
                    </a>
                    <Link to="/" className="h3 text-white align-self-center un-underline">
                        Kudoshi
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav px-3">
                        <li className="nav-item px-2">
                            <Link to="/" className="nav-link">Homepage</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/project" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            </nav>
        </div>
          
    );
}