import React, { useContext } from "react";
import "./Header2.css"
import { MyContext } from "../../Main";

function RightBar() {

    const func = useContext(MyContext)

    function HidePage() {
        func(0)
    }

    return(
        <div className="RightBar" onClick={HidePage}>
            <p className="CentralBarText">вернуться назад</p>
        </div>
    )
}

export default RightBar