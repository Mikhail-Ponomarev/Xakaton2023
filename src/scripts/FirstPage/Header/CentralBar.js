import React from "react";
import Txt from "./Txt";
import "./Header.css"

function CentralBar() {
    return(
        <div className="CentralBar">
            <Txt text={'О программе'}/>
            <Txt text={'О нас'}/>
        </div>
    )
}

export default CentralBar