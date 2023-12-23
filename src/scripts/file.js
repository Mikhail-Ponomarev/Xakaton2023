import React, { useRef, useState } from "react"
import "../styles/file.css"



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
            <input className="fileInput" type="file" onChange={ShowFile} ref={file}/>
        </div>
    )
}

export default InputFile