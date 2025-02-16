import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

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

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

export default App;
