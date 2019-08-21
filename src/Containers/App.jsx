import React from "react";
import classes from "./App.module.scss";
import Navigation from "../Components/Navigation/Navigation";
import { Route, Redirect } from "react-router-dom";

import Courses from "../Components/Courses/Courses";
function App() {
  return (
    <div className={classes.App}>
      <Navigation />
      <main>
        <Route path="/course" component={Courses} />
        <Redirect from="/" to="/course" />
      </main>
    </div>
  );
}

export default App;
