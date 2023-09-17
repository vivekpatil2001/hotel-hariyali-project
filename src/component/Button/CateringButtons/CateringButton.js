import "./CateringButton.css";

export default function CateringButton(){
   
return (
    <>
    <div>
    <div class="quantity-btn-container">
            <button type="button" onclick="decrement()" className="button-incre-decre">
                -
            </button>
            <span id="quantity">1</span>
            <button type="button" onclick="increment()" className="button-incre-decre">
                +
            </button>
        </div>
        </div>
    </>

)
}
