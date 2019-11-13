import React from "react";
import PropTypes from "prop-types";

const Certificate = ({ data }) => (
  <article className="certificate-container">
    <header>
      <h4 className="title-n-year">
        <b>{data.name}</b> {data.year}
      </h4>
      {data.code === undefined ? null : (
        <h4 className="code">Verification Code: {data.code}</h4>
      )}
      <p className="school">
        <a href={data.link}>{data.school}</a>
      </p>
    </header>
  </article>
);

Certificate.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    code: PropTypes.string,
    school: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })
};

export default Certificate;
