import React from "react";

const Response = ({ result, refresh }) => {
  return (
    <div className="response-container">
      <div className="response-header">
        <p>Response</p>
        <button className="refresh-button" onClick={() => refresh()}>
          Refresh
        </button>
      </div>

      <div className="result">
        {Array.isArray(result) ? (
          <code className="result-text">
            [
            <br />
            {result.map((singleAdvice) => (
              <>
                {""} "{singleAdvice}",<br></br>
              </>
            ))}
            ]
          </code>
        ) : (
          <code className="result-text">{result}</code>
        )}
      </div>
    </div>
  );
};

export default Response;
