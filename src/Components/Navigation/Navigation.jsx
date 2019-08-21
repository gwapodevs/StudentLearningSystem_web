import React, { Fragment, Component } from "react";
import classes from "./Navigation.module.scss";
import { Link } from "react-router-dom";
class Navigation extends Component {
  state = {
    showPanel: false
  };

  togglePanel = () => {
    this.setState({ showPanel: !this.state.showPanel });
  };
  render() {
    var navClass = this.state.showPanel ? classes.Show : null;
    return (
      <Fragment>
        <div className={classes.Navigation}>
          <nav className={navClass}>
            <div className={classes.Logo}>
              <div>Gwapo Devs</div>
            </div>
            <div className={classes.Navs}>
              <ul>
                <li>
                  <Link to="/profile"> Profile </Link>
                </li>
                <li>
                  <Link to="/options">Options</Link>
                  <div className={classes.Dropdown}>
                    <div>
                      <ul>
                        <li>
                          <Link to="/option1">Options 1</Link>
                        </li>
                        <li>
                          <Link to="/option2">Options 2</Link>
                        </li>
                        <li>
                          <Link to="/option3">Options 3</Link>
                        </li>
                        <li>
                          <Link to="/option4">Options 4</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/course">Course</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className={classes.Hamburger} onClick={this.togglePanel}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Navigation;
