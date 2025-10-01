import React, { useState, useCallback } from "react";

function Without() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  // useCallback → function reference same until deps change
  const handleClick = useCallback(() => {
    console.log("Child button clicked!");
  }, []); // no dependencies → same reference forever

  console.log("Parent rendered");

  return (
    <div
      style={{
        background: theme ? "black" : "white",
        color: theme ? "white" : "black",
        padding: "2rem",
        textAlign: "center",
        borderRadius: "12px",
      }}
    >
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>

      {/* Child receives handleClick */}
      <Child onClick={handleClick} />
    </div>
  );
}

// 👇 React.memo removed — child will render every time parent renders
const Child = ({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
};

export default Without;
