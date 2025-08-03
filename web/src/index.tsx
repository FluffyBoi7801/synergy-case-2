import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./app/App";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
