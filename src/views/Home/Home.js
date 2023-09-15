import "./Home.css"

import Navbar from "./../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";


export default function Home(){
    return(
         <>
            <Navbar/>
            <div className="main-container">
              <div className="home-bg-text">
                    <p>Welcome to Ottawa's</p>
                </div>
            </div>
            <Footer/>
            </>
    )
}