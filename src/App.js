import React, { useState } from "react";

import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Simple Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default App;
