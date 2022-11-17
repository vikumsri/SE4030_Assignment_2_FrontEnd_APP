import React, { useState, useEffect, useRef, useContext } from "react";
import "./SaveMessage.scss";
import crypto from 'crypto-js';
import Context from "../../ContextAPI/Context";

const SaveMessage = () => {

  const [message, setMessage] = useState(false);
    

    const handleMsg = (e) => {
        let mag = e.target.value.trim();
        setMessage(mag);
    };

  return (
    <Context.Consumer>
            {(context) => (
    <div className="base-container center">
      <div className="form-container-wh ">
        <div className="center title">Save Message</div>

        <div style={{ marginTop: "30px", width: "100%" }}>
          <textarea
            type="text"
            class="textarea-container"
            placeholder="Message"
            id="floatingInput"
            rows="5"
            onChange={(e) => {
              handleMsg(e)
          }}
          />
        </div>

        <div className="center" style={{ marginTop: "30px" }}>
          <div className="send-btn center "onClick={() => {
            const hashedMessage = crypto.AES.encrypt(message, '$2a$10$CwTycUXWue0Thq9StjUM0u').toString()
            context?.AddMsg(hashedMessage)
          }}>Send Message</div>
        </div>
      </div>
    </div>
    )}
    </Context.Consumer>
  );
};

export default SaveMessage;
