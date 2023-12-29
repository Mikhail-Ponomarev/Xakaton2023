import React, { useState } from "react";
import "./ThirdBlockStyles.css"

function BlockText() {
    const [tmp,setTmp] = useState(0)

    const [style, setStyle] = useState("txt33")

    function ShowText() {
        if(tmp == 0) {
            setStyle("txt23")
            setTmp(1)    
        }
    }

    const style2 = "txtGap"

    return (
        <div className="Block22" onMouseEnter={ShowText}>
            <div className="txtBlock1">
                <p className={style} >ЗАЧЕМ</p>
            </div>
            <div className="txtBlock2">
                <p className={style} >НУЖНО</p>
            </div>
            <div className="txtBlock3">
                <p className={style + " " + style2} >ОБЕЗЛИЧИВАНИЕ?</p>
            </div>
        </div>
    )
}

export default BlockText

