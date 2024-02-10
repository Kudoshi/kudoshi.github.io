
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <div className="container-fluid px-4">
                <div className="d-flex flex-row align-content-center justify-content-center">
                    <a className="navbar-brand" href="/">
                        <img src="/images/website-logo.png" alt="Avatar Logo" style={{width:"50px"}} className="rounded-circle"/> 
                    </a>
                    <div className="h3 text-white align-self-center">
                        Kudoshi
                    </div>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-end" id="collapsibleNavbar">
                    <ul class="navbar-nav px-3">
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Home Page</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>

            </nav>
        </div>
          
    );
}