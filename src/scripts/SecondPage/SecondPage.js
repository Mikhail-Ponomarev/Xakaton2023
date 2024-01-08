import React, {useState, useRef} from "react";
import "./SeconPageStyles.css"
import Header from "./Header/Header";
import TextBlock from "./TextBlock";
import InputFile from "./file"
import TextBlock2 from "./TextBlock2";

function SecondPage() {
    const [endpointIndex, setEndpointIndex] = useState(-1)
    const [flag, setFlag] = useState(false)
    const [style2, setStyle2] = useState("hide")
    const [style, setStyle] = useState("btn")
    const ref1 = useRef(null) // радиокнопка 1
    const ref2 = useRef(null) // радиокнопка 2
    const ref3 = useRef(null) // радиокнопка 3
    const ref4 = useRef(null) // кнопка отправки данных 
    return(
        <div className="SecondPage">
            <Header />
            <TextBlock func={setEndpointIndex} ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} setStyle2={setStyle2} flag={flag} setStyle={setStyle}/>
            <InputFile index={endpointIndex} ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} style2={style2} setStyle2={setStyle2} flag={flag} setFlag={setFlag} style={style} setStyle={setStyle} setEndpointIndex={setEndpointIndex}/>
            <TextBlock2 />
        </div>
    )
}

export default SecondPage