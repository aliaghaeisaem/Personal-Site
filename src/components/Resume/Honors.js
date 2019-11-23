import React from "react";
import PropTypes from "prop-types";

import Honor from "./Honor/Honor";

const Honors = ({ data }) => (
  <div className="honor">
    <div className="link-to" id="honors" />
    <div className="title">
      <h3>Honors</h3>
    </div>
    {/* <article className="jobs-container">
      <h4>To be updated soon!</h4>
    </article> */}
    {data.map(job => (
      <Honor data={job} key={job.daterange} />
    ))}
  </div>
);

Honors.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      position: PropTypes.string,
      link: PropTypes.string,
      daterange: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

Honors.defaultProps = {
  data: []
};

export default Honors;
