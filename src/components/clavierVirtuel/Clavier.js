import React, { useState } from "react";

import "./../../css/clavier.css";
import Key from "./Key";

const rows = [
  ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "⌫"],
  ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
  ["MAJ", "w", "x", "SPACE", "c", "v", "b", "n"]
];

function Clavier(props) {
  const [text, setText] = useState("Hello Word");
  const [maj, SetMaj] = useState(false);

  const handleUpdateText = lettre => {
    if (lettre === "SPACE") {
      setText(text + " ");
    } else if (lettre === "⌫") {
      setText(text.slice(0, text.length - 1));
    } else if (lettre === "MAJ") {
      SetMaj(!maj);
    } else {
      if (maj) {
        lettre = lettre.toUpperCase();
      }
      setText(text + lettre);
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <span role="img" aria-label="Keyboard">
            ⌨️
          </span>{" "}
          {props.title}
        </h1>
      </div>
      <div className="keyboard">
        <pre>
          <span
            style={{
              minHeight: "2rem",
              lineHeight: "2rem",
              fontSize: "2rem",
              borderRight: "3px solid black",
              display: "inline-block",
              margin: "1rem"
            }}
          >
            {text}
          </span>
        </pre>
        {rows.map((row, index) => {
          return (
            <div className="row">
              {row.map((lettre, index) => {
                return <Key value={lettre} onClick={handleUpdateText} />;
              })}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Clavier;
