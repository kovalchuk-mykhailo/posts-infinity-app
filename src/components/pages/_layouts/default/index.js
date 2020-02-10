import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../../NavBar";
import "../../../../sass/layouts/_default.scss";

export default function DefaultLayout({ children }) {
  return (
    <>
      <NavBar>Posts Infinity</NavBar>
      <div className="Default-Wrapper">{children}</div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
