import React, { useRef, useState } from "react"
import "./file.css"

function InputFile(props) {
    const [data, setData] = useState(null)
    const [binUrl, setBinUrl] = useState(null)
    const [pdfUrl, setPdfUrl] = useState('');


    function ShowFile(event) {
        setData(event.target.files[0])
    }

    const SubmitFrom = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file_upload', data)
        try {
            const endpoint = 'http://127.0.0.1:8000/upload_file/document'
            await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Credentials': true
                },
                body: formData
            }).then(response => response.blob())
            .then(blob => {
              const url = new Blob([blob]);
              setBinUrl(url);
              console.log(url)
            })

        } catch(error) {
            console.error(error)
        }
    }

    const file = useRef(null)

    const convertToPdf = () => {
        if (binUrl) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const blob = new Blob([data], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            setPdfUrl(url)
          };
          reader.readAsArrayBuffer(binUrl);
        }
      };
    

    return(
        <div className="blockFile">
            <form onSubmit={SubmitFrom}>
                <input className="fileInput" type="file" onChange={ShowFile} id="fileInput" ref={file}/>
                <label for="fileInput" className="FileLabel" onClick={() => {file.current.focus()}}>Добавить файл</label>
                <button type="submit" className="btn">Загрузить файл</button>
            </form>
            <div className="getData">
                <h2>Загрузка файла из REST API</h2>
                <button onClick={convertToPdf}>Скачать файл</button>
                {pdfUrl && <a href={pdfUrl} download="file">Нажмите здесь для скачивания файла</a>}
            </div>

        </div>
    )
}

export default InputFile