
import React from "react";
import './../styles/App.css';
import { useState } from "react/cjs/react.production.min";

const App = () => {
  const[count, setCount] = useState(0)
  return (
    <div>
      <p>Button cliked {count} times</p>
      <button onClick = {() => 
        setCount(count + 1)
      }>Click me</button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
