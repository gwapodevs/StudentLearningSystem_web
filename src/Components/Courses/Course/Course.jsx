import React from "react";
import classes from "./Course.module.scss";

const Course = ({ name }) => {
  return <div className={classes.Course}>{name}</div>;
};

export default Course;
