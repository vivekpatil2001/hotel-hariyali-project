import React from 'react';
import { useState } from "react";
import './Cards.css';
import CateringButton from '../Button/CateringButtons/CateringButton';

export default function Cards(props, name, city, buton){

    const [count, setCount] = useState(1);

    function IncrementValue() {
        setCount(count + 1);
    }

    function DecreseValue() {
        setCount(count - 1);
    }




    return (
        <div className="card-container">
            <img src={props.Img} alt="Card Image" className='catering-cards-img' /> <br />

            <h1 className='card-heading'>{props.name}</h1>

            <h2 className='card-heading'>{props.city}</h2>
            <button className='catering-btn-incdec' onClick={IncrementValue}>+</button>
            <button type='button' className='button-catering' id='quantity'>{props.button}{count}</button>
            <button className='catering-btn-incdec' onClick={DecreseValue}>-</button>


        </div>
    );
}

