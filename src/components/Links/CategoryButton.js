import React from "react";
import PropTypes from "prop-types";

const CategoryButton = ({ handleClick, active, label }) => (
  <button
    className={`linkbutton ${active[label] ? "linkbutton-active" : ""}`}
    type="button"
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired
};

export default CategoryButton;
