import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm HeaderColor navbar-dark sticky-top">
            <div className="container-fluid px-4">
                <div className="d-flex flex-row align-content-center justify-content-center">
                    <a className="navbar-brand" href="/">
                        <img src="/images/website-logo.png" alt="Avatar Logo" style={{width:"50px"}} className="rounded-circle"/> 
                    </a>
                    <Link to="/" className="BrandTextColor align-self-center un-underline">
                       <h3>Kudoshi</h3>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-end font-abeezee-normal" id="collapsibleNavbar">
                    <ul className="navbar-nav px-3">
                        <li className="nav-item px-2">
                            <Link to="/" className="nav-link text-white">Homepage</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/project" className="nav-link text-white">Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>

            </nav>
        </div>
          
    );
}