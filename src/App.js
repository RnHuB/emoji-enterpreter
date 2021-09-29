import React, { useState } from "react";
import "./styles.css";

const emojiDistinory = {
  "🦍": "Gorilla",
  "🐕": "Dog",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐄": "Cow",
  "🐘": "Elephant",
  "🐁": "Rat",
  "🐇": "Rabbit",
  "🦚": "Peackock",
  "🦋": "Butterfly",
  "🦜": "Parrot"
};

const emojiList = Object.keys(emojiDistinory);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDistinory[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! This emoji is not availabel in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDistinory[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav className="navigation">
        <h1>Emoji Interpreter</h1>
      </nav>
      <input placeholder="Put emoji here" onChange={inputEventHandler} />
      <div>{meaning}</div>
      <p>Available Emojis</p>
      {emojiList.map((item) => {
        return (
          <span
            className="emojiSpan"
            key={item}
            onClick={() => emojiClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
