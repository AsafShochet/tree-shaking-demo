import React from "react";
import { createRoot } from "react-dom/client";
import {
  MyList,
  MyButton,
  MyDropdown,
  MyDatePicker,
} from "tree-shaking-lecture";

const App = () => (
  <div>
    <h1>The best app</h1>
    <div>AI inside, security too, block chain, web 3, you name it</div>
    <MyButton onClick={() => alert("clicked")}>Button 1</MyButton>
    <MyButton onClick={() => alert("clicked")}>Button 2</MyButton>
    <MyDropdown
      options={[
        { label: "Option 1", value: "Option 1" },
        { label: "Option 2", value: "Option 2" },
      ]}
      onChange={(e) => console.log(e.target.value)}
    />

    <MyDatePicker
      value={new Date().toISOString()}
      onChange={(e) => console.log(e.target.value)}
    />
  </div>
);

console.log(MyList);
const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);
