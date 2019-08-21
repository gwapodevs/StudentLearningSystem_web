import React from "react";
import classes from "./Post.module.scss";
const Post = props => {
  return (
    <div className={classes.Post}>
      <div>
        <div>Image</div>
        Burger
      </div>
      <div>unmoveable</div>
    </div>
  );
};

export default Post;
