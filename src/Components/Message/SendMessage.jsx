import React, { useState, useEffect, useRef, useContext } from "react";
import "./SendMessage.scss";
import crypto from 'crypto-js';
import Context from "../../ContextAPI/Context";

const SaveMessage = () => {

  const [message, setMessage] = useState('');
  const [validationErr, setValidationErr] = useState(true);
    

    const handleMsg = (e) => {
        let msg = e.target.value.trim();
        if (msg.length <= 0 ){
          setValidationErr(true)
        }else{
          setMessage(msg);
          setValidationErr(false)
        }
        
    };

  return (
    <Context.Consumer>
            {(context) => (
    <div className="base-container center">
      <div className="form-container-wh ">
        <div className="center title">Send Message</div>

        <div style={{ marginTop: "30px", width: "100%" }}>
          <textarea
            type="text"
            class="textarea-container"
            placeholder="Message"
            id="floatingInput"
            rows="5"
            value={message}
            onChange={(e) => {
              handleMsg(e)
          }}
          />
        </div>

        {validationErr ?
          <div className="validation-txt-upload">Empty messages cannot be saved</div> : ''}

        <div className="center" style={{ marginTop: "30px" }}>
          <div className="send-btn center "onClick={() => {
            if(!validationErr){
              context?.AddMsg(message)
            setMessage('');
            }
          }}>Send Message</div>
        </div>
      </div>
    </div>
    )}
    </Context.Consumer>
  );
};

export default SaveMessage;