import React from "react";
import styles from "./styles.module.scss";
import LinkButton from "../../LinkButton";
import { HOME_PATH } from "../../../constants/Pathes";

export default function UserMenu({ userName, onSignOutClick }) {
  return (
    <span className={styles.UserMenu}>
      <h3>{userName}</h3>
      <LinkButton to={HOME_PATH} onClick={onSignOutClick}>
        Log out!
      </LinkButton>
    </span>
  );
}
