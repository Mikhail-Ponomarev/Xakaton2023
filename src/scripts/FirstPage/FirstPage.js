import React from "react";
import Header from "./Header/Header"
import SecondBlock from "./SeconBlock/SecondBlock";
import {ThridBlock} from "./ThridBlock/ThridBlock";
import "./FirstPageStyles.css"

function FirstPage() {
    return(
        <div className="main">
            <Header />
            <SecondBlock />
            <ThridBlock />
        </div>
    )
}

export default FirstPage