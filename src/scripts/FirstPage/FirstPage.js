import React from "react";
import Header from "./Header/Header"
import SecondBlock from "./SeconBlock/SecondBlock";
import "./FirstPageStyles.css"

function FirstPage() {
    return(
        <div className="main">
            <Header />
            <SecondBlock />
        </div>
    )
}

export default FirstPage