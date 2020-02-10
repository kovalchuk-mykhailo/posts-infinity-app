import React from "react";
import styles from "./styles.module.scss";

function Welcome() {
  return (
    <div className={styles.Welcome}>
      <h3>
        Welcome to Posts Infinity. You can view other people's posts on the site
        and publish your own posts if you wish!
      </h3>
    </div>
  );
}

export default Welcome;
