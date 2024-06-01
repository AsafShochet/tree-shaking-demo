import React from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <div>
    <h1>Hello, React 18 with TypeScript!</h1>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);
