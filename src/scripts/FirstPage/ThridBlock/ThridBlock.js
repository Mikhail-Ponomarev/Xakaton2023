import React, { useRef, useState } from "react";
import "./ThirdBlockStyles.css"
import BlockText from "./BlockText";
import ExampleHide from "./ExampleHide";
import pic1 from "./User1.png"
import pic2 from "./ 1.png"

const MyContext = React.createContext(null)

function ThridBlock() {
    const [flaf, setFlag] = useState(0)
    const ref1 = useRef(null)
    const ref2 = useRef(null)

    const [tmp, setTmp] = useState(0)

    function Click1() {
        setTmp(0)
        ref1.current.classList.add('bg1')
        ref1.current.classList.remove('bg2')
        ref2.current.classList.add('bg2')
        ref2.current.classList.remove('bg1')
    }

    function Click2() {
        setTmp(1)
        ref2.current.classList.add('bg1')
        ref2.current.classList.remove('bg2')
        ref1.current.classList.add('bg2')
        ref1.current.classList.remove('bg1')
    }

    return(
        <div className="ThridBlock">
            <BlockText />
            <MyContext.Provider value={tmp}>
                <ExampleHide />
            </MyContext.Provider>
            <div className="TwoButtons">
                <div className="Data bg1" ref={ref1} onClick={Click1}>
                    <img className="picData" src={pic1}/>
                </div>
                <div className="Data bg2" ref={ref2} onClick={Click2}>
                    <img className="picData" src={pic2}/>
                </div>
            </div>

        </div>
    )
}

export {ThridBlock, MyContext}