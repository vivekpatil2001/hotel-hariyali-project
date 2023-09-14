import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    const path = window.location.pathname;
    return (

        <div className="nav">
            <span>My website</span>

            <Link to="/" className={path==='/'? 'active':''}>HOME</Link>
            <Link to="/contact" className={path==='/contact'? 'active':''}>Contact</Link>
            <Link to="/Menu" className={path==='/menu'? 'active':''}>Menu</Link>
            <Link to="/Catering" className={path==='/catering'? 'active':''}>Catering</Link>

        </div>

    )
}