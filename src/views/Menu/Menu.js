import "./Menu.css";

import Button from "./../../component/Button/Button";
import Menucard from "./../../component/Cards/Menucard";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

import main_img1 from "./../../views/Menu/img/CHICKEN-KABAB.jpeg";
import main_img2 from "./../../views/Menu/img/CHICKEN-WINGS.jpeg";
import main_img3 from "./../../views/Menu/img/RICE-WITH-STEW.jpeg";
import main_img4 from "./../../views/Menu/img/CHICKEN-FILLET.jpeg";
import main_img5 from "./../../views/Menu/img/DELIMIA.jpeg";
import main_img6 from "./../../views/Menu/img/KABSEN-WITH-LAMB-SHANK.jpeg";
import main_img7 from "./../../views/Menu/img/MANDIN-WITH-LAMB-SHANK.jpeg";
import main_img8 from "./../../views/Menu/img/3MIX-PLATE.jpeg";

import Weight_img1 from "./../../views/Menu/img/CHICKEN-KABAB1.jpeg";
import Weight_img2 from "./../../views/Menu/img/SHISH-TAOUT.jpeg";
import Weight_img3 from "./../../views/Menu/img/MIX.jpeg";
import Weight_img4 from "./../../views/Menu/img/TIKKA-LAMB.jpeg";

import salad_img1 from "./../../views/Menu/img/FALAFEL.jpeg";
import salad_img2 from "./../../views/Menu/img/VEGGIE-PLATE.jpeg";
import salad_img3 from "./../../views/Menu/img/GARDEN-SALAD.jpeg";
import salad_img4 from "./../../views/Menu/img/TABBOULES.jpeg";

import cake_img1 from "./../../views/Menu/img/Rasmalai-Cake.jpeg";
import cake_img2 from "./../../views/Menu/img/chochlate-cake.jpeg";
import cake_img3 from "./../../views/Menu/img/strawberry-cake.jpg";
import cake_img4 from "./../../views/Menu/img/chocho-cake.jpeg";

import sand_img1 from "./../../views/Menu/img/veg-sandwich.jpeg";
import sand_img2 from "./../../views/Menu/img/Corn_And_Capsicum_Sandwich.jpg";
import sand_img3 from "./../../views/Menu/img/grilled-chilli-cheese-sandwich.jpg";
import sand_img4 from "./../../views/Menu/img/Fruit_Sandwich.jpg";


















export default function Menu(){

    return(
        <>
        <Navbar/>
    <div className="menu-bg"> 
           <h1 className="menu-heading menu-head">Menu</h1>
           <h3 className="menu-head">Indulge in the exquisite and diverse tastes of </h3>
           <h3 className="menu-head"> Middle Eastern cuisine with our menu.</h3>
    </div>
    <div className="btn-div">
     <Button name='Main Course  >'/>
     <Button name='By Weight  >'/>
     <Button name='Family Size  >'/>
     <Button name='Sandwiches  >'/>
     <Button name='Salad & Appetizer  >'/>
     <Button name='Desserts  >'/>
     <Button name=' Breakfast  >'/>
     <Button name='Drinks & Sides   >'/>

    </div>

    <h1 className="menu-field">MAIN COURSE</h1>
    <div className="menu-div "  >
        <Menucard img={main_img1} text="CHICKEN KABAB [2sk]" price="15.99" />
        <Menucard img={main_img2} text="CHICKEN WINGS" price="15.99" />
        <Menucard img={main_img3} text="RICE WITH STEW" price="15.99" />
        <Menucard img={main_img4} text="CHICKEN FILLET" price="15.99" />
        
    </div>
    
    <div className="menu-div "  >
        <Menucard img={main_img5} text="DELIMIA" price="24.99" />
        <Menucard img={main_img6} text="KABSEN WITH LAMB SHANK" price="24.99" />
        <Menucard img={main_img7} text="MANDIN WITH LAMB SHANK" price="30.99" />
        <Menucard img={main_img8} text="3MIX-PLATE" price="15.99" />
        
    </div>
    
    <h1 className="menu-field">BY WEIGHT</h1>
    <div className="menu-div "  >
        <Menucard img={Weight_img1} text="1/2 KG CHICKEN KABAB" price="21.99" />
        <Menucard img={Weight_img2} text="1/2 KG SHISH TAOUT" price="26.99" />
        <Menucard img={Weight_img3} text="1/2 KG MIX" price="29.99" />
        <Menucard img={Weight_img4} text="1/2 KG TIKKA LAMB" price="34.99" />
        
    </div>

    <h1 className="menu-field">SALADS & APPITIZERS</h1>
    <div className="menu-div "  >
        <Menucard img={salad_img1} text="FALAFEL [6PCS]" price="10.99" />
        <Menucard img={salad_img2} text="VEGGIE PLATE" price="25.99" />
        <Menucard img={salad_img3} text="GARDEN SALAD" price="20.99" />
        <Menucard img={salad_img4} text="TABBOULES" price="8.99" />
        
    </div>

    <h1 className="menu-field">CAKES</h1>
    <div className="menu-div "  >
        <Menucard img={cake_img1} text="Rasmalai Cake" price="300.10" />
        <Menucard img={cake_img2} text="chochlate-cake" price="250" />
        <Menucard img={cake_img3} text="strawberry-cake" price="200" />
        <Menucard img={cake_img4} text="chocho-cake" price="150" />
        
    </div>

    <h1 className="menu-field">SANDWICH</h1>
    <div className="menu-div "  >
        <Menucard img={sand_img1} text="veg sandwich" price="30.10" />
        <Menucard img={sand_img2} text="Corn Andb Capsicum Sandwich" price="40" />
        <Menucard img={sand_img3} text="Grilled chilli cheese sandwich" price="50" />
        <Menucard img={sand_img4} text="Fruit Sandwich" price="45" />
        
    </div>

   <Footer/>
    </>

    )
}