import React, { useState } from "react";
import "./styles.css";

var welcome = "Welcome to the Feelin it!\n";
var meaning = "";

var emojiDictionary = {
  "😂": "Laughing",
  "😭": "Crying",
  "🥺": "Pleading",
  "😊": "Smiling",
  "😉": "Winking",
  "🤨": "Suspicion(The Rock)",
  "🤫": "Quiet",
  "😏": "Smirk",
  "🙄": "Eye Roll",
  "😴": "Sleeping",
  "😁": "Beaming Face with Smiling Eyes",
  "😅": "Grinning Face with Sweat",
  "😇": "Smiling Face with Halo"
};

export default function App() {
  var [emojiMeaning, SetNewMeaning] = useState("Meaning will be shown here");

  function onClickUpdate(item) {
    meaning = emojiDictionary[item];
    SetNewMeaning(meaning);
  }

  function userInputEmoji(event) {
    meaning = emojiDictionary[event.target.value];
    if (event.target.value.trim() === "") {
      meaning = "Enter some emoji";
    }
    if (meaning === undefined) {
      meaning = "Sorry! Meaning not known";
    }
    SetNewMeaning(meaning);
  }

  const emojisInDatabase = Object.keys(emojiDictionary);

  return (
    <div className="App">
      <h1>{welcome}</h1>
      <input onChange={userInputEmoji} placeholder="Enter your emoji here" />
      <h4>{emojiMeaning}</h4>
      <div>
        {emojisInDatabase.map((item) => {
          return (
            <span
              className="emojiSpan"
              onClick={() => onClickUpdate(item)}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
