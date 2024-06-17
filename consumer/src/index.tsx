import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  MyList,
  MyButton,
  MyDropdown,
  MyDatePicker,
} from "tree-shaking-lecture";
import { Head } from "./components/Head";
import "./main.scss";
import { getRandomAIWord } from "./services/RandomAI";
import { getRandomSecurityWord } from "./services/RandomSecurity";
import { getRandomStartupName } from "./services/RandomFluff";

const App = () => {
  const [name, setName] = useState<string | null>(null);
  return (
    <div>
      <Head />
      <header className="header">
        <div>Tree Shaking Lecture</div>
        <div>About</div>
      </header>
      <div className="main">
        <h1>Startup generator</h1>
        <div className="fortune">
          Fortunes: One day, you'll be on The Marker cover with a white shirt
          and 2 bald men
        </div>
        <div className="generator">
          <div className="card">
            <label>Goal</label>
            <div className="content">
              <MyDropdown
                options={[
                  { label: "To be sold to a giant", value: "Option 1" },
                  { label: "To become a giant", value: "Option 2" },
                ]}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>
          <div className="card">
            <label>Date</label>
            <div className="content">
              <MyDatePicker
                value={new Date().toISOString()}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>
          <div className="card">
            <MyButton
              onClick={() =>
                setName(
                  `${getRandomSecurityWord()} ${getRandomAIWord()} ${getRandomStartupName()}`
                )
              }
            >
              Go!
            </MyButton>
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
    </div>
  );
};

console.log(MyList);
const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);
