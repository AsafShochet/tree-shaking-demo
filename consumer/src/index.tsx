import React from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <div>
    <h1>The best app</h1>
    <div>AI inside, security too, block chain, web 3, you name it</div>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);
