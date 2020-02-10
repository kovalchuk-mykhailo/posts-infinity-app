import React from "react";
import PropTypes from "prop-types";
import '../../../../sass/layouts/_auth.scss'

export default function AuthLayout({ children }) {
  return (
    <div className="Auth-Wrapper">
      {children}
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
