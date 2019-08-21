import React, { Component } from "react";
import Course from "./Course/Course";
class Courses extends Component {
  state = {
    courses: [
      {
        id: 1,
        name: "CourseName1"
      },
      {
        id: 2,
        name: "CourseName2"
      },
      {
        id: 3,
        name: "CourseName3"
      },
      {
        id: 4,
        name: "CourseName4"
      }
    ]
  };

  render() {
    var courses = this.state.courses.map(course => (
      <Course key={course.id} name={course.name} />
    ));

    return <div>{courses}</div>;
  }
}

export default Courses;
