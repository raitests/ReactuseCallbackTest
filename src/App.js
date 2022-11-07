import React, { useState, useCallback } from "react";
import "./App.css";
import Button from "./components/UI/Button";
import DemoOutput from "./components/UI/Demo/DemoOutput";

function App() {
  console.log("app.js running");
  const [showOutput, setShowOutput] = useState(true);

  //useCallback returns a memorized function
  const toggleHandler = useCallback(() => {
    setShowOutput((prevShowOutput) => !prevShowOutput);
  }, []);

  return (
    <>
      <DemoOutput show={false} />
      <Button onClick={toggleHandler}>Toggle paragraph</Button>
    </>

    //Remember JS gives obj === obj as false, but primitive types as true
    //like 1 === 1 (true)  , "hi"  === "hi"  (true)
    // but [1,2,3] === [1,2,3] (false) , {} === {} (false)
    //This is exactly why the button props comparision by React.memo is seen as false and the button is re-evaluated.
    //To fix this, use useCallBack
  );
}

export default App;
