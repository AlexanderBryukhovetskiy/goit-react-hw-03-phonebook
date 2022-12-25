import React from "react";
import css from "./Container.module.css";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className={css.container}>
      {children}
    </div>
  )
};

Container.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.any.isRequired).isRequired
};

export default Container;