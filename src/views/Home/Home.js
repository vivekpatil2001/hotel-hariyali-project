import "./Home.css"

import Navbar from "./../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import homeimg2 from "../Home/img/home2img.jpeg"
import Button from "../../component/Button/Button";
import {Homepagecard} from "../../component/Cards/Card"
import Homestar from "./img/stars.png"
import {Contactpagecardcustum} from "../../component/Cards/Card"
import breafsst from "../Home/img/breakfast.jpg"
import lunch from "../Home/img/lunch.jpg"
import sweet from "../Home/img/sweets.jpg"


export default function Home() {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className="textOfhome">
                <p className="homewelcome">- Welcome to Hariyali</p>
                <p className="home-slogen-line">
                AUTHENTIC<br/>MEDITERRANEAN<br/>RESTAURANT
                </p>
                <button className="BTNONHOME"><Button name='ORDER NOW'/><Button name='BOOK A TABLE'/></button>
                
                </div>
                
            </div>

            {/* ------- */}
            <div className="texthome2">
                <div>
                    <img src={homeimg2} className="homeimg2" />
                </div>
                <div>
                    <h1 className="hometaxt3"><i>Our Special Offer</i></h1>

                    <p className="hometaxt3 removemg">12 Skewers mix grill<br></br> with salad and sides</p>
                    <p className=" homesubtext">Ideal for sharing between 3 to 5 people, our 12 Skewers<br></br> mix grill comes with a fresh side salad and tasty sides.</p>
                    <p className="homesubtext homesubtext2">

                        Quality and Fresh Ingredients<br></br><br></br>


                        House-made from scratch<br></br><br></br>

                        Authentic Original Taste
                    </p>
                    <div className="btnhome"><Button name='Order now'/></div>
                </div>
            </div>
            <div>

            </div>
            {/* ---------- */}
            <div className="home-custum-category" >
                Choose as custum
            </div>

          <div className="home-custm-card-conatainer">  <Contactpagecardcustum Imgcustom={breafsst}  header="BREAKFAST MENU"/>
            <Contactpagecardcustum Imgcustom={lunch} header="LUNCH MENU"/>
            <Contactpagecardcustum Imgcustom={sweet}  header="SWEET MENU"/></div>

            <div className="clientreview">
                <h2 className="clientreviewheading"><i>--- Our clients reviews ---</i></h2>
                <h2 className="clientreviewheading1">What our clients say about us</h2>
                <img className="home-star-img" src={Homestar}/>

            </div>
            <div className="home-card-container">
                <Homepagecard name="NITISH KUMAR" guide="Local guide" text="The food was good and the place was clean. For what we ordered, we see jt very affordable. Our only comment was the filler minion, it was a bit showy. But everything else was fine. Will definitely visit them again."/>
                <Homepagecard name="ABHIJEET KOKAT" guide="Local guide" text="The food was authentic and delicious. The menue is reasonably priced and the portion was generous, I couldn’t finish up my plate and ended up asking for a box to takeout. Employees were super nice and welcoming. Will visit this place again!
" />

            </div>

            <div className="home-card-container  home-card-container2 ">
                <Homepagecard name="VIVEK SHEJOLE" guide="Local guide" text="The food was authentic and delicious. The menue is reasonably priced and the portion was generous, I couldn’t finish up my plate and ended up asking for a box to takeout. Employees were super nice and welcoming. Will visit this place again!
"/>
                <Homepagecard name="ANAND SHIRBHAIYYE" guide="Local guide" text="The food was good and the place was clean. For what we ordered, we see jt very affordable. Our only comment was the filler minion, it was a bit showy. But everything else was fine. Will definitely visit them again.
"/>

            </div> 
            <div className="btn-revews"><Button name='See all reviews'/></div>

            <div className="registreo-container">

                <span className="line-home">
                Want to be the first to find out about our new items?
                </span>
                <p className="subscribe">Subscribe to our newsletter!</p>

                <input className="input-box-custum" placeholder="Make a decision" type="text"/><br/>

                <button className="btn-subscribr">Registro</button>


            </div>

            <Footer/>
           
        </>
    )
}