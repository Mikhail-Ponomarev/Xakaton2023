import React from "react";
import "./SecondBlockStyles.css"
import ChangeTxt from "./ChangeText";

function SecondBlock() {
    return(
        <div className="SecondBlock">
            <p className="ConstTxt">ОБЕЗЛИЧИВАЙТЕ</p>
            <ChangeTxt />
        </div>
    )
}

export default SecondBlock