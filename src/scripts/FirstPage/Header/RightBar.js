import React, { useContext } from "react";
import "./Header1.css"
import { MyContext } from "../../Main";

function RightBar() {

    const func = useContext(MyContext)

    function HidePage() {
        func(1)
    }

    return(
        <div className="RightBar1" onClick={HidePage}>
            <p className="CentralBarText">Обезличить</p>
        </div>
    )
}

export default RightBar