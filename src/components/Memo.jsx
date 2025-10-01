import { useState, useMemo } from "react";

function Memo() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  // 🔹 Expensive calculation
  const squared = useMemo(() => {
    console.log("Calculating square...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result = number * number; // pretend heavy calculation
    }
    return result;
  }, [number]); // only run when number changes

  console.log("Parent rendered");
  console.log("Parent rendered, number:", number);


  return (
    <div
      style={{
        background: theme ? "black" : "white",
        color: theme ? "white" : "black",
        padding: "2rem",
        textAlign: "center"
      }}
    >
      <h2>Number: {number}</h2>
      <h3>Squared: {squared}</h3>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
    </div>
  );
}

export default Memo;
