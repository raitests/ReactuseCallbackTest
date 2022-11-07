import React from "react";
import Paragraph from "./Paragraph";

const DemoOutput = (props) => {
  console.log("DemoOutput running");
  return (
    <>
      <Paragraph show={props.show} />
    </>
  );
};

export default React.memo(DemoOutput);
//React.memo compares the value of previous props and current props and only re-evaluates the componnets and it's children;

