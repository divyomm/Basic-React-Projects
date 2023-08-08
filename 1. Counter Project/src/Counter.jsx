import { useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1 className="number">{count}</h1>
        </div>
        <section className="btns-container">
          <button onClick={() => setCount(count + 1)} className="increment">
            +
          </button>
          <button onClick={() => setCount(count - 1)} className="increment">
            -
          </button>
        </section>
      </div>
    </>
  );
};
export default Counter;
