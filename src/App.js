import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>
      <h2>
        Current value of count is :{" "}
        <sapn style={{ color: "#3DBE29" }}>{count}</sapn>
      </h2>
      <div className="btn-container">
        <button onClick={() => (count > 9 ? null : setCount(count + 1))}>
          +
        </button>
        <button onClick={() => (count < 1 ? null : setCount(count - 1))}>
          -
        </button>
      </div>

      <button onClick={() => setCount(0)}>Reset Counter</button>
    </div>
  );
}
