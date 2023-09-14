import "./Catering.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    const path = window.location.pathname;
    return (

        <div className="nav">
            <span>My website</span>

            <Link to="/" className={path==='/'? 'active':''}>HOME</Link>
            <Link to="/about" className={path==='/about'? 'active':''}>About</Link>
            <Link to="/contact" className={path==='/contact'? 'active':''}>Contact</Link>

        </div>

    )
}