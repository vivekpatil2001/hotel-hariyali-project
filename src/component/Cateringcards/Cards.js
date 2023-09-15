import React from 'react'; 
import './Cards.css';

export default function Cards(props) { 
    return (
        <div className="card-container">
            <img src={props.Img} alt="Card Image" className='catering-cards-img'/> 
        </div>
    );
}
