import React from "react";
import PropTypes from "prop-types";

import Job from "./Experience/Job";

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience</h3>
    </div>
    {/* <article className="jobs-container">
      <h4>To be updated soon!</h4>
    </article> */}
    {data.map(job => (
      <Job data={job} key={job.daterange} />
    ))}
  </div>
);

Experience.propTypes = {
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

Experience.defaultProps = {
  data: []
};

export default Experience;
