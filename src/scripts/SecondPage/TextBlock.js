import React from "react";
import "./SeconPageStyles.css"

function TextBlock() {
    return(
        <div className="FilesTxt">
            <p className="types">Выберите тип документа</p>
            <div className="formBlock">
                <div className="radioBlock">
                    <input type="radio" name="FileType" id="pasport" className="radio" />
                    <label for="pasport" className="radioLable">Паспорт</label>
                </div>
                <div className="radioBlock">
                    <input type="radio" name="FileType" id="snils" className="radio" />
                    <label for="snils" className="radioLable">Снилс</label>
                </div>
                <div className="radioBlock">
                    <input type="radio" name="FileType" id="polis" className="radio" />
                    <label for="polis" className="radioLable" >Полис</label>
                </div>
                <div className="radioBlock">
                    <input type="radio" name="FileType" id="doc" className="radio" />
                    <label for="doc" className="radioLable">Договор купли-продажи</label>
                </div>
            </div>
        </div>
    )
}

export default TextBlock