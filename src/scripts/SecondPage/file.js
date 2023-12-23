import React, { useRef, useState } from "react"
import "./file.css"



function InputFile(props) {
    const [binaryData, setBinaryData] = useState(null)

    function ShowFile() {
        const reader = new FileReader()
        reader.onload = (e) => {
            setBinaryData(e.target.result)
            console.log(binaryData)
        }        
        reader.readAsBinaryString(file.current.files[0])
    }

    const file = useRef(null)

    return(
        <div className="blockFile">
            <input className="fileInput" type="file" onChange={ShowFile} id="fileInput" ref={file}/>
            <label for="fileInput" className="FileLabel" onClick={() => {file.current.focus()}}>Добавить файл</label>
        </div>
    )
}

export default InputFile