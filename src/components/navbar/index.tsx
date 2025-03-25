import "./index.css"
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
    <nav>
        <div className="logo">
            <span style={{ color: "aqua" }}>$</span>killSync
        </div>
        <ul id="sidemenu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  );
};
export default Navbar;