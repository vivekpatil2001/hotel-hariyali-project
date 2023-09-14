import "./Menu.css";

import Button from "./../../component/Button/Button";

export default function Menu(){

    return(
        <>
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
    </>
    )
}