import React, { useEffect, useState } from "react";
import "./Header2.css"

function Line2() {

    const [tmp, setTmp] = useState(0)
    const [style, setStyle] = useState("BottomBorder")

    useEffect(() => {
        const interval = setInterval(() => {
            setStyle(prevStyle => prevStyle === "BottomBorder2" ? "NoBottomBorder2" : "BottomBorder2");
        }, 500);

        return () => clearInterval(interval);
    })

    return(
        <div className={style}></div>
    )
}

export default Line2