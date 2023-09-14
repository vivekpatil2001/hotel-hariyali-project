import "./Catering.css"
import img1 from "./img/catering-main1.jpeg";

export default function About() {
    return (
        <>

            {/* <div className="background-img-container">

                <div></div>
                <img src={img1} alt="img-catering" className="img-catering1" />

                <div>

                    <h1 className="heading">Catering</h1>
                    <br /><br /><br /><br />
                    <div className="tagline-container">
                        <span className="tagline">Experience the Rich Flavors of <br />Middle Eastern Cuisine with our <br />Catering.</span>
                    </div>
                </div>



    // </div> */

                <div className="main-container">

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







            }

        </>
    )
}
