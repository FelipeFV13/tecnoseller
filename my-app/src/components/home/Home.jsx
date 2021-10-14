import React from "react";
import Slider from "./Slider";
import Mensaje from "./Mensaje";
import Cards from "./Cards";

function Home(){
    return(
        <div>
            <Slider/>
            <Mensaje/>
            <Cards/>
        </div>
    );
}

export default Home;