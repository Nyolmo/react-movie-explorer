import { Link } from "react-router-dom";
import "../css/navbar.css"


function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="/icon.jpg" alt="App Icon" className="navbar-icon" />
                <Link to="/">Movie Explorer </Link>
            </div>
            <div>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar;