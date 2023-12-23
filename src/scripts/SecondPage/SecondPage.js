import React from "react";
import "./SeconPageStyles.css"
import Header2 from "./Header2";
import TextBlock from "./TextBlock";
import InputFile from "./file"

function SecondPage() {
    return(
        <div className="SecondPage">
            <Header2 />
            <TextBlock />
            <InputFile />
        </div>
    )
}

export default SecondPage