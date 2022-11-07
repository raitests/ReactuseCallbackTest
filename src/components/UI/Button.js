import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  console.log("button running");
  return (
    <button onClick={props.onClick} {...props} className={classes.button}>
      {props.children}
    </button>
  );
};

export default React.memo(Button);

