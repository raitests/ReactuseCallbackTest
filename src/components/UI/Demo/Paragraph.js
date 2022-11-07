import React from "react";

function Paragraph(props) {
  console.log("paragraph runnning");
  return <p>{props.show ? "This is a demo output" : ""}</p>;
}

export default Paragraph;
