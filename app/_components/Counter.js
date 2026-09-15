"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex gap-2">
      <button onClick={incrementCount}>+</button>
      <p>{count}</p>
      <button onClick={decrementCount}>---</button>
    </div>
  );
}
