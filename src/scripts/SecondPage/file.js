import React, { useRef, useState } from "react"
import "./file.css"



function InputFile(props) {
    const [data, setData] = useState(null)

    function ShowFile(event) {
        setData(event.target.files[0])
    }

    const SubmitFrom = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file_upload', data)
        
        try {
            const endpoint = 'http://127.0.0.1:8000/upload_file/document'
            const responce = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            })

            if(responce.ok) {
                console.log('Ok!')
            } else {
                console.log('Problems')
            }

        } catch(error) {
            console.error(error)
        }
    }

    const file = useRef(null)

    return(
        <div className="blockFile">
            <form onSubmit={SubmitFrom}>
                <input className="fileInput" type="file" onChange={ShowFile} id="fileInput" ref={file}/>
                <label for="fileInput" className="FileLabel" onClick={() => {file.current.focus()}}>Добавить файл</label>
                <button type="submit" className="btn">Загрузить файл</button>
            </form>
        </div>
    )
}

export default InputFile