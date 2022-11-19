import React, { useContext, useState } from "react";
import "./UploadFile.scss";
import uploadImage from "../../Assets/upload.png";
import Context from "../../ContextAPI/Context";
import crypto from 'crypto-js';

const UploadFile = () => {

  const [selectedFile, setFile] = useState('');
  const [base64file, setFilebase64] = useState('');
  const [err, setErr] = useState(false);
  const conText = useContext(Context)



  const handleFile = (e) => {
    setFile(e.target.files[0])

   getBase64(e.target.files[0], (result) => {
    setFilebase64(result);
 });

    setErr(false)
  }

  const getBase64 = (file, callback) => {

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      
      callback(reader.result)
    };

    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <Context.Consumer>
            {(context) => (
    <div className="base-container center">
      <div className="form-container-upload ">
        <div className="center title">Upload File</div>

        <div
          style={{ marginTop: "30px", width: "100%" }}
          class="box-container center colC"
        >
          <img
            src={uploadImage}
            style={{ height: "150px", width: "150px" }}
            alt="upload"
            onClick={(e) => {
              handleClick(e)
            }}
          />

          {selectedFile === '' ?
            <div className="center small-title">Upload File</div> :
            <div className="center filename">{selectedFile.name}</div>}
        </div>

        {err ?
          <div className="validation-txt-upload">Please Upload a File</div> : ''}

        <div className="center" style={{ marginTop: "30px" }}>
          <div className="btn-upload center"
            onClick={() => {
              if (selectedFile === '') {
                setErr(true)
              }
              else {
                context?.UploadFile(base64file)
              }
            }
            }
          >Upload File</div>
        </div>


        <input type='file'
          ref={hiddenFileInput}
          onChange={(e) => {
            handleFile(e)
          }}

          style={{ display: "none" }}
        />

      </div>
    </div>
    )}
    </Context.Consumer>
  );
};

export default UploadFile;
