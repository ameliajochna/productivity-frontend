import React, { useState } from "react";
import { DefaultApi } from "../api/api";
import { Configuration } from "../api/configuration";

const ChatGPT = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const openapiConfig = new Configuration();
  openapiConfig.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";
  const openapi = new DefaultApi(openapiConfig);

  const handleAskChatGPT = () => {
    setResponse("");
    openapi
      .askGptAskGptPost({ question })
      .then((response) => {
        setResponse(response.data.response);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <>
      {isOpen ? (
        <div className="page-blur">
          <div className="popup-window popup-window-gpt">
            <div className="response-area">
              {response ? (
                <>
                  <div className="gpt-icon" />
                  <div className="response-message">{response}</div>
                </>
              ) : (
                <></>
              )}
              <button
                className="btn-close-document"
                id="chatgpt"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="question-area">
              <textarea
                type="text"
                placeholder="Can you give me a few dinner ideas?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="question-textarea"
              />
              <button className="ask-chatgpt" onClick={handleAskChatGPT} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="submit-login chatgpt-icon"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Need some help? Ask ChatGPT
        </div>
      )}
    </>
  );
};

export default ChatGPT;
