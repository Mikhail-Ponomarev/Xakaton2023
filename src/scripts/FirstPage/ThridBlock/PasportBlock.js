import React, {useContext, useEffect, useState} from "react";
import "./Example.css"
import pic1 from "./Person.svg"
import { Context } from "./ThridBlock";

function PasportBlock() {

    const [style, setStyle] = useState("PersonInfoText")
    const tmp = useContext(Context)

    useEffect(() => {
        if(tmp == 0) {
            setStyle("PersonInfoText")
        } else {
            setStyle("PersonInfoText3")
        }
    }, [tmp])

    
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
                        <p className={style}>
                            ИВАНОВ  
                        </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                            имя
                        </p>
                        <p className={style}>
                            ИВАН
                        </p>
                    </div>
                    <div className="PersonInfo">
                            <p className="PersonInfoText2">
                                отчество
                            </p>
                            <p className={style}>
                                ИВАНОВИЧ
                            </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                            пол
                        </p>
                        <p className={style}>
                            МУЖ
                        </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                            дата рождения
                        </p>
                        <p className={style}>
                            2.2.2002
                        </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2" >
                            место рождения
                        </p>
                        <p className={style}>
                            ЕЙСК
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default PasportBlock