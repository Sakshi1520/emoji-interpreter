import React, { useState } from "react";
import "./styles.css";

var welcome = "Welcome to the Feelin it!\n";
var meaning = "";

var emojiDictionary = {
  "๐": "Laughing",
  "๐ญ": "Crying",
  "๐ฅบ": "Pleading",
  "๐": "Smiling",
  "๐": "Winking",
  "๐คจ": "Suspicion(The Rock)",
  "๐คซ": "Quiet",
  "๐": "Smirk",
  "๐": "Eye Roll",
  "๐ด": "Sleeping",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Face with Sweat",
  "๐": "Smiling Face with Halo"
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
