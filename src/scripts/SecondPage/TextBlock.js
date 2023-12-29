import React, { useRef } from "react";
import "./SeconPageStyles.css"

function TextBlock(props) {
    const func = props.func

    const ref1 = props.ref1
    const ref2 = props.ref2
    const ref3 = props.ref3
    const ref4 = props.ref4
    const setStyle2 = props.setStyle2;
    const flag = props.flag
    const setStyle = props.setStyle

    function click() { 
        if(flag === true) {
            ref4.current.disabled = false 
            setStyle("btn2")
        }
    } 

    return(
        <div className="FilesTxt">
            <p className="types">Выберите тип документа</p>
            <div className="formBlock">
                <div className="radioBlock">
                    <input type="radio" name="FileType" id="pasport" className="radio" onClick={() => {func(0); click(); setStyle2("hide")}} ref={ref1}/>
                    <label for="pasport" className="radioLable">Водительские права</label>
                </div>
                <div className="radioBlock">
                    <input type="radio" name="FileType" id="snils" className="radio" onClick={() => {func(1); click(); setStyle2("hide")}} ref={ref2}/>
                    <label for="snils" className="radioLable">Снилс</label>
                </div>
                <div className="radioBlock">
                    <input type="radio" name="FileType" id="doc" className="radio" onClick={() => {func(2); click(); setStyle2("hide")}} ref={ref3}/>
                    <label for="doc" className="radioLable">Договора</label>
                </div>
            </div>
        </div>
    )
}

export default TextBlock