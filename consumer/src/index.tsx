import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import MyComponents from "tree-shaking-lecture";
import { Head } from "./components/Head";
import {
  getRandomAIWord,
  getRandomSecurityWord,
  getRandomAnimal,
  getSocialNetworkName,
} from "./services/WordGenerator";
import "./main.scss";

const App = () => {
  const [name, setName] = useState<string | null>(null);
  const [date, setDate] = useState<string>("");

  const generateName = () => {
    if (date.includes("2024-")) {
      return `${getRandomAIWord()} ${getRandomAnimal()}`;
    }
    if (date.includes("2022-")) {
      return `${getRandomSecurityWord()} ${getRandomAnimal()}`;
    }
    return `${getSocialNetworkName()} ${getRandomAnimal()}`;
  };

  return (
    <div className="container">
      <Head />
      <header className="header">
        <div>Tree Shaking Lecture</div>
        <div>About</div>
      </header>
      <div className="main">
        <h1>Startup generator</h1>
        <h4>And time machine</h4>

        <div className="generator">
          <div className="datepicker">
            <label>Date</label>
            <MyComponents.MyDatePicker
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="button">
            <MyComponents.MyButton onClick={() => setName(generateName())}>
              Go!
            </MyComponents.MyButton>
          </div>
        </div>
        <div className="result">
          {name && (
            <div>
              <h3>{name}</h3>
            </div>
          )}
        </div>
      </div>
      <footer>
        <div className="fortune">
          Fortunes: One day, you'll be on The Marker cover with a white shirt
          and 2 bald men
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);
