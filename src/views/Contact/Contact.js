import "./Contact.css";
// import { Link } from "react-router-dom";
import Contactpagecard from "./../../component/Cards/Card";
import ImgCall from './img/tele.png';
import ImgLoc from './img/address.png';
import ImgClock from './img/cloc.png';
import ImgGmail from './img/mail.png';






export default function About() {
    return (
        <>

            <div className="background-contanctimg-container">

                <h1 className="heading-name">Conatct Us</h1>
                <p className="contact-line">
                    Please give us a call, or email us and we’ll get back to you.
                </p>

            </div>
            <div className="contact-card-container">
            <Contactpagecard Img={ImgCall}  Heading={'PHONE'} Text={'207 Shevalewadi, hadapsar, pune - 412545'}/>
            <Contactpagecard Img={ImgLoc}   Heading={'OUR LOCATION'} Text={'+91 9356181098'}/>
            <Contactpagecard Img={ImgGmail} Heading={'EMAIL US'} Text={'vivekpatil@gmail.com'}/>
            <Contactpagecard Img={ImgClock} Heading={'OPENING HOURS'} Text={'Sat-Sun: 9:00 AM to 10:00 PM Mon-Fri: 12:00 PM to 10:00'}/>
            </div>

            <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33006.7615118433!2d73.93103125686586!3d18.510068544660214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3aac094bfc5%3A0x9da333f9b8124bd9!2sHotel%20Haryali!5e0!3m2!1smr!2sin!4v1694759895889!5m2!1smr!2sin" ></iframe>

           


        </>

    )
}