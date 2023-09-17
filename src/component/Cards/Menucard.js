import "./Menucard.css"

export default function Card ({img,text,price}){

    return(
        <>
        <div className='menu-card'>

            <img src={img} height='300px' alt='img'className="dis-img" ></img>
            <h4 className="menu-name">{text}</h4>
            <h3 className="menu-price">$ {price}</h3>
            

        </div>
        </>
    )
}