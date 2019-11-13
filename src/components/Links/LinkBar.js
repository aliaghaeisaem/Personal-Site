import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkBar = ({ data, categories }) => {
  const { category, link, title, desc } = data;

  return (
    <div className="linkbar clearfix">
      <a href={link} className="title">
        <div>{title}</div>
      </a>{" "}
      {desc ? <div className="preview">{desc}</div> : null}
      {/* <div className="linkbar-title"></div> */}
      <div className="linkbar-bar" />
    </div>
  );
};

LinkBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
};

LinkBar.defaultProps = {
  categories: []
};
export default LinkBar;
