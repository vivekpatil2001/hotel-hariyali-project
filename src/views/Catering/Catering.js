import "./Catering.css";
import Navbar from "./../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import img1 from "./img/catering-main1.jpeg";
import img2 from "./img/catering12new.jpg";
import img3 from "./img/bday.jpeg";
import img4 from "./img/wedding1.jpeg";
import img5 from "./img/catering-for-couples-table.jpeg";
import img6 from "./img/reception.jpg";
import img7 from "./img/Fall-table.jpg";
import img8 from "./img/catering-6.jpeg";
import img9 from "./img/catering-service.jpeg";
import img10 from "./img/catering-service2.webp";
import img11 from "./img/catering-service1.jpeg";
import Cards from "../../component/Cateringcards/Cards";
import CateringButton from "../../component/Button/CateringButtons/CateringButton";

export default function Catering() {
    return (
        <>
            <Navbar />

            <div className="main-catering-container">
                <div className="background-img-container">
                    <img src={img1} alt="img-catering" className="img-catering1" />
                </div>

                <div className="main-tagline">
                    <h1 className="heading">Catering</h1>
                    <br /><br /><br /><br />
                    <div className="tagline-container">
                        <span>Experience the Rich Flavors of Middle Eastern Cuisine with our Catering..<br />🥂🍷</span>
                    </div>
                </div>
            </div>
            <br />

            <div className="catering-container2">
                <div className="catering-service">
                    <span className="service-tagline">--- Make Your Next Event Memorable</span>
                    <br /><br />
                    <h1 className="heading2">WITH OUR SPECIALIZED <br />CATERING SERVICES</h1>
                    <br /><br /><br /><br />
                    <div className="info-about-catering">
                        <p>
                            Are you planning a special event or celebration? Make it unforgettable with Ottawa Kabab’s specialized catering services. Our experienced Middle Eastern chefs specialize in creating mouth-watering dishes for celebrations, birthday parties, weddings, get together, fairwell and other special events.
                        </p>
                    </div>

                </div>
                <div>
                    <img src={img2} className="img2" />
                </div>
            </div>
            <br /><h1 className="heading-table-booking">↪Table Booking</h1>
            <div className="container3">
                <Cards Img={img3} name="BIRTHDAY-PARTIES" city="$2,00000/-" button={CateringButton} />
                <Cards Img={img4} name="WEDDINGS" city="$2,00000/-" button={CateringButton} />
                <Cards Img={img5} name="SPECIAL-EVENT" city="$2,00000/-" button={CateringButton} />
            </div>
            <br />
            <div className="info-container">
                <div className="information-bday-weeding-event">
                    <p className="information-bday">Celebrate your special occasions in style at Hariyali Hotel! We offer exquisite table bookings for birthday parties, weddings, and special events. Our elegant and spacious venues provide the perfect backdrop for your memorable moments. Reserve your table now to create unforgettable memories with friends and family at Hariyali Hotel. Contact us today to secure your spot!</p>
                </div>
            </div>

            <div className="container4">
                <Cards Img={img6} name="RECEPTION" city="$1,00000/-" button={CateringButton} />
                <Cards Img={img7} name="FALL-TABLE" city="$1,00000/-" button={CateringButton} />
                <Cards Img={img8} name="FOR-COUPLES" city="$1,00000/-" button={CateringButton} />
            </div>
            <br />
            <div className="info-container">
                <div className="information-bday-weeding-event">
                    <p className="information-bday-2">
                        Discover the enchantment of Hariyali Hotel, where moments transform into cherished memories. 🌿 Elevate your gatherings with our exclusive table bookings, tailored for receptions, autumnal soirées, and intimate couples' rendezvous. 🍂✨ Our warm ambiance and impeccable service redefine hospitality, ensuring each event is an everlasting treasure. Reserve your table today to embark on an unparalleled journey at Hariyali Hotel. 🌟🥂 Contact us promptly to secure your place amidst the magic and craft timeless memories with your dear ones. 📞</p>
                </div>
            </div>
            <br /><br /><br />
            <div className="main-container-catering4">
                <div>
                </div>
                <br /><br /><br />
                <h1 className="heading-catering-service">Catering Service</h1>

                <br />
                <div className="container-catering-servicee">
                    <p className="catering-service-information-hariyali">
                        Hariyali Hotel offers a diverse range of catering services to suit your every need. From elegant banquet-style dinners that are perfect for weddings and formal events, to casual and vibrant outdoor barbecues, our experienced team is equipped to create a memorable culinary experience for any occasion. Our menu options span from traditional Indian cuisine to international flavors, ensuring a delightful dining experience for all your guests. Whether it's a corporate luncheon or a grand celebration, Hariyali Hotel's catering services, delivered by our dedicated team, are designed to exceed your expectations and leave a lasting impression.</p>
                </div>
                <br />


                <div className="img-cater-9">
                    <img src={img9} alt="img-catering" className="catering-service-img" />

                    <img src={img10} alt="img-catering" className="catering-service-img" />

                    <img src={img11} alt="img-catering" className="catering-service-img" />
                </div>

            </div>
            <div className="footercatering">
            <Footer/>
            </div>

            
 </>
    )
}
