import React from "react";
import classes from "./Interface.module.scss";
export const Button = ({ click, children }) => {
  var interfaceElement = null;
  interfaceElement = (
    <button className={classes.Button} onClick={click}>
      {children}
    </button>
  );
  return interfaceElement;
};

export const Search = ({ click, children }) => {
  var interfaceElement = null;
  interfaceElement = <div className={classes.Search} />;
  return interfaceElement;
};
