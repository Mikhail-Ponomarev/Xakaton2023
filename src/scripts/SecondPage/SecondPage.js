import React from "react";
import "./SeconPageStyles.css"
import Header2 from "./Header2";
import TextBlock from "./TextBlock";
import InputFile from "./file"
import TextBlock2 from "./TextBlock2";

function SecondPage() {
    return(
        <div className="SecondPage">
            <Header2 />
            <TextBlock />
            <InputFile />
            <TextBlock2 />
        </div>
    )
}

export default SecondPage