import "./Card.css"
import { Link } from "react-router-dom"


export default function Contactpagecard( {Img , Heading , Text})

{
   return(
    <div className="contact-page-cardcard">

        
        
    <img className="img-contact" src={Img} alt=""/>

    <h2 className="card-headding" >{Heading}</h2>

    <p className="card-text">{Text}</p>
     


</div>
   )
}
export function Homepagecard({name, guide, text})
 {
  
   return(
      <>
      <div className="home-page-card">
        <h1 className="review-card-heading">{name}</h1>

        <p className="review-card-name">{guide}</p>

        <p className="home-card-texr">{text}</p>
      


      </div>
      </>
   )
 }

 export  function Contactpagecardcustum( {Imgcustom , header })

{
   return(
    <div className="contact-page-card1">

        
        
    <img className="img-breakfast" src={Imgcustom} alt=""/>

    <h2 className="custumheadding" >{header}</h2>

    
     


</div>
   )
}