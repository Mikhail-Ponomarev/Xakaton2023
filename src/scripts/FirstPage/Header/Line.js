import React, { useEffect, useState } from "react";
import "./Header1.css"

function Line() {

    const [tmp, setTmp] = useState(0)
    const [style, setStyle] = useState("BottomBorder")

    useEffect(() => {
        const interval = setInterval(() => {
            setStyle(prevStyle => prevStyle === "BottomBorder" ? "NoBottomBorder" : "BottomBorder");
        }, 500);

        return () => clearInterval(interval);
    })

    return(
        <div className={style}></div>
    )
}

export default Line