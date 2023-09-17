import "./Navbar.css";
import { Form, Link } from "react-router-dom";
import logo from "../Navbar/img/home-logo.png";



export default function Navbar() {
    const path = window.location.pathname;
  
    return (
        <nav>
           
               
            <ul>
                {/* <div className="navmenu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> */}
               
              <Link to="/" className="title"> <img src={logo} className="logo-img"/></Link>
           
                <li>
                <Link to="/" className={path === '/' ? 'active1' : ''} id="home-home">HOME</Link>
                </li>
               
                <li>
                <Link to="/Menu" className={path === '/menu' ? 'active1' : ''}>Menu</Link>
                </li>
                <li>
                <Link to="/Catering" className={path === '/catering' ? 'active1' : ''}>Catering</Link>
                </li>
                <li>
                <Link to="/contact" className={path === '/contact' ? 'active1' : ''}>Contact</Link>
                </li>
                <li>
                     <button className="navbtn">Book a table</button>
                </li>
            </ul>
           
        </nav>
    );
}