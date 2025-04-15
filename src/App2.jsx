import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <Button key={color} color={color} func={onButtonClick(color)} className={backgroundColor === color ? "selected" : ""} />
      ))}
    </div>
  );
}

function Button(props) {
    const [timesClicked, setTimesClicked] = useState(0);
    
    const onBtnClick = () => {
        props.func();
        setTimesClicked(timesClicked + 1);
    }
    
    return (
        <button type="button" onClick={onBtnClick}>
          {props.color} {timesClicked}
        </button>
    )
}

export default App;