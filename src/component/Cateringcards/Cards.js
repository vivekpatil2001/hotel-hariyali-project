import React from 'react';
import './Cards.css';


export default function Cards(props, name, city, buton) {

    return (
        <div className="card-container">
            <img src={props.Img} alt="Card Image" className='catering-cards-img' /> <br />

            <h1 className='card-heading'>{props.name}</h1>

            <h2 className='card-heading'>{props.city}</h2>
            <div className='buttons-incre-decree'>
            <button className='catering-btn-incdec'>-</button>
            <button type='button' className='button-catering' id='quantity'>Content</button>
            <button className='catering-btn-incdec'>+</button>
            </div>

        </div>
    );
}