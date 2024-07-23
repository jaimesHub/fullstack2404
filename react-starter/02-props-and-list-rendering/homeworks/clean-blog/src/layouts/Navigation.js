import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <Link to="/" className="navbar-brand">Start Bootstrap</Link>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link px-lg-3 py-3 py-lg-4">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link px-lg-3 py-3 py-lg-4">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/post" className="nav-link px-lg-3 py-3 py-lg-4">Sample post</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link px-lg-3 py-3 py-lg-4">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navigation;