import React from "react";
import { createRoot } from "react-dom/client";
import { MyList, MyButton } from "tree-shaking-lecture";

const App = () => (
  <div>
    <h1>The best app</h1>
    <div>AI inside, security too, block chain, web 3, you name it</div>
    <MyButton onClick={() => alert("clicked")}>Click me</MyButton>
  </div>
);

console.log(MyList);
const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);
