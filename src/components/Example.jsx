import React, { useState, useCallback } from "react";

//Child wrapped in React.memo → only re-render if props change
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

function Parent() {
  const [text, setText] = useState("");

  //useCallback → stable reference until dependencies change
  const handleClick = useCallback(() => {
    console.log("Child button clicked!");
  }, []); // empty deps → same ref always

  console.log("Parent rendered");

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;