import "./Card.css"
import { Link } from "react-router-dom"


export default function Contactpagecard( {Img , Heading , Text})

{
   return(
    <div className="contact-page-card">

        
        
    <img className="img-contact" src={Img} alt=""/>

    <h2 className="card-headding" >{Heading}</h2>

    <p className="card-text">{Text}</p>
     


</div>
   )
}
