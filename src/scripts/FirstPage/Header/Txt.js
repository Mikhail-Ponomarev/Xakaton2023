import React from "react";
import "./Header1.css"

function Txt(props) {
    return (
        <p className="CentralBarText" onClick={() => {props.func(props.value + 1)}}>{props.text}</p>
    )
}

export default Txt