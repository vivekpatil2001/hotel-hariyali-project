import "./Contact.css";
// import { Link } from "react-router-dom";
import Contactpagecard from "./../../component/Cards/Card";
import ImgCall from './img/tele.png';
import ImgLoc from './img/address.png';
import ImgClock from './img/cloc.png';
import ImgGmail from './img/mail.png';
import ImgEmployee from './img/employee.jpg';
import ImgEmp from './img/emp.jpg';






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
                <Contactpagecard Img={ImgCall} Heading={'PHONE'} Text={'+91 9356181098'} />
                <Contactpagecard Img={ImgLoc} Heading={'OUR LOCATION'} Text={'207 Shevalewadi, hadapsar, pune - 412545'} />
                <Contactpagecard Img={ImgGmail} Heading={'EMAIL US'} Text={'vivekshejole143@gmail.com'} />
                <Contactpagecard Img={ImgClock} Heading={'OPENING HOURS'} Text={'Sat-Sun: 9:00 AM to 10:00 PM Mon-Fri: 12:00 PM to 10:00'} />
            </div>

            <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33006.7615118433!2d73.93103125686586!3d18.510068544660214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3aac094bfc5%3A0x9da333f9b8124bd9!2sHotel%20Haryali!5e0!3m2!1smr!2sin!4v1694759895889!5m2!1smr!2sin" ></iframe>

            <div className="contact-page-division">

                <img className="contact-employee-img" src={ImgEmployee} />
                <div className="back-color">
                    <p className="massage-contact"> - Send us message</p>
                    <p className="back-color welcome-line">WE WELCOME YOU , VISIT US ANYTIME</p>

                    <input type="text" className="input-1" placeholder="Your Name" />
                    <input type="text" className="input-1" placeholder="Your Phone" />
                    <input type="text" className="input-2" placeholder="Your Email" />
                    <input type="text" className="input-3" placeholder="Message" /><br />

                    <button type="button" className="msg-btn">Send Message </button>


                </div>

            </div>
                <div>

                <span className="request">Booking request</span> <span className="book-line1"> 613-518-7434</span>
                    <p className="book-line">Book your table now</p>
                    <p className="reservation">ONLINE RESERVATION</p>



                </div>

                <div className="login-form">
                <div><input type="text" className="input-4" placeholder="Name" />
                <input type="email" className="input-4" placeholder="Email" />
                <input type="text" className="input-4" placeholder="Phone" /><br/>
                <input type="number" className="input-4" placeholder="How many person?" />
                <input type="date" className="input-4" placeholder="Pick a date" />
                <input type="time" className="input-4" placeholder="Time" /><br/>
                <input type="text" className="input-5" placeholder="Message" /><br/>

                <button type="button" className="msg-btn btnnnn">Book now </button>
                

                </div>

                <img className="contact-employee-img imggggg" src={ImgEmp} />


                </div>

              
        </>

    )
}