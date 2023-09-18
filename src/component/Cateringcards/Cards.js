import React from 'react';
import './Cards.css';

import { useState } from 'react';
export default function Cards(props, name, city, buton) {
  const [count, setCount] = useState(0);
  function incrementCount(){
    setCount (count + 1);
  }
  function decrementCount(){
    setCount (count - 1);
  }


    return (
        <div className="card-container">
            <img src={props.Img} alt="Card Image" className='catering-cards-img' /> <br />

            <h1 className='card-heading'>{props.name}</h1>

            <h2 className='card-heading'>{props.city}</h2>
            <div className='buttons-incre-decree'>
            <button className='catering-btn-incdec' onClick={decrementCount}>-</button>
            <button type='button' className='button-catering' id='quantity'>Content&nbsp;&nbsp;{count}</button>
            <button className='catering-btn-incdec' onClick={incrementCount}>+</button>
            </div>

        </div>
    );
}