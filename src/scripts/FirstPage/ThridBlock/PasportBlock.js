import React, {useContext, useRef} from "react";
import "./Example.css"
import pic1 from "./Person.svg"
import { MyContext } from "./ThridBlock";

function PasportBlock(props) {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)

    const tmp = useContext(MyContext)

    if(tmp == 0) {
        ref1.current.classList.add("PersonInfoText")
        ref1.current.classList.remove("PersonInfoTex3")
        ref2.current.classList.add("PersonInfoText")
        ref2.current.classList.remove("PersonInfoTex3")
        ref3.current.classList.add("PersonInfoText")
        ref3.current.classList.remove("PersonInfoText3")
        ref4.current.classList.add("PersonInfoText")
        ref4.current.classList.remove("PersonInfoText3")
        ref5.current.classList.add("PersonInfoText")
        ref5.current.classList.remove("PersonInfoText3")
        ref6.current.classList.add("PersonInfoText")
        ref6.current.classList.remove("PersonInfoText3")
    } else {
        ref1.current.classList.add("PersonInfoText3")
        ref1.current.classList.remove("PersonInfoText")
        ref2.current.classList.add("PersonInfoText3")
        ref2.current.classList.remove("PersonInfoText")
        ref3.current.classList.add("PersonInfoText3")
        ref3.current.classList.remove("PersonInfoText")
        ref4.current.classList.add("PersonInfoText3")
        ref4.current.classList.remove("PersonInfoText")
        ref5.current.classList.add("PersonInfoText3")
        ref5.current.classList.remove("PersonInfoText")
        ref6.current.classList.add("PersonInfoText3")
        ref6.current.classList.remove("PersonInfoText")
    }
    
    return(
        <div className="PasportBlock">
                <div className="ImgBlock">
                    <img src={pic1} className="PicPerson" />
                </div>
                <div className="PersonInfoBlock">
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                        фамилия
                        </p>
                        <p className="PersonInfoText" ref={ref1}>
                            ИВАНОВ  
                        </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                            имя
                        </p>
                        <p className="PersonInfoText" ref={ref2}>
                            ИВАН
                        </p>
                    </div>
                    <div className="PersonInfo">
                            <p className="PersonInfoText2">
                                отчество
                            </p>
                            <p className="PersonInfoText" ref={ref3}>
                                ИВАНОВИЧ
                            </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                            пол
                        </p>
                        <p className="PersonInfoText" ref={ref4}>
                            МУЖ
                        </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                            дата рождения
                        </p>
                        <p className="PersonInfoText" ref={ref5}>
                            2.2.2002
                        </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2" >
                            место рождения
                        </p>
                        <p className="PersonInfoText" ref={ref6}>
                            ЕЙСК
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default PasportBlock