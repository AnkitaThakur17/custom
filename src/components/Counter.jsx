import React from 'react'
import { useCounter } from '../hooks/useCounter'

const Counter = () => {
    const {count, increment, decrement, reset} = useCounter(0)
  return (
    <div style={{ padding: "2rem" }}>
        <h1 style={{color:"red"}}>Custom hook</h1>
      <h2>Count : {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
