import "./Catering.css";
import img1 from "./img/catering-main1.jpeg";
import img2 from "./img/catering12new.jpg";
import img3 from "./img/bday.jpeg";
import img4 from "./img/wedding1.jpeg";
import img5 from "./img/catering-for-couples-table.jpeg";

import Cards from "../../component/Cateringcards/Cards";


export default function Catering() {
    return (
        <>

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

            <div className="container3">
                <Cards Img={img3}/>
                <Cards Img={img4}/>
                <Cards Img={img5}/>
            </div>

        </>
    )
}
