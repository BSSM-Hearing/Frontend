import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

export default function Speech() {
  const [showval, setShowval] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setShowval("Q : " + result);
    },
  });

  return (
    <div style={{ marginTop: "120px" }}>
      <div
        style={{
          width: "400px",
          height: "200px",
          borderRadius: "10px",
          padding: "20px",
          boxSizing: "border-box",
          border: "1px solid black",
          margin: "0 auto",
          fontSize: "28 px",
        }}
      >
        {showval}
      </div>
      <button
        onMouseDown={listen}
        onMouseUp={stop}
        style={{
          display: "block",
          margin: "0 auto",
          width: "400px",
          border: "0",
          padding: "1rem",
          background: "#00aaff",
          borderRadius: "10px",
          marginTop: "20px",
          fontSize: "24px",
        }}
      >
        π€
      </button>
      {listening && (
        <div
          style={{ textAlign: "center", marginTop: "20px", fontSize: "24px" }}
        >
          μμ±μΈμ νμ±ν μ€
        </div>
      )}

    </div>
  );
}
