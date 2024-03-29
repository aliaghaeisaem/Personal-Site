import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
const images = require.context('../../images/projects', true);

console.log(images('./vga-controller.png'))
const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <time className="published">
          {dayjs(data.date).format("MMMM, YYYY")}
        </time>
      </header>
      <a href={data.link} className="image">
        <img src={images(`./${data.image}`)} alt="" />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

export default Cell;
