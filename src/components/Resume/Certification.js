import React from "react";
import PropTypes from "prop-types";

import Certificate from "./Certifications/Certificate";

const Certification = ({ data }) => (
  <div className="certification">
    <div className="link-to" id="certification" />
    <div className="title">
      <h3>Certification</h3>
    </div>
    {/* <article className="certificate-container">
      <h4>To be updated soon!</h4>
    </article> */}
    {data.map(cert => (
      <Certificate data={cert} />
    ))}
  </div>
);

Certification.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      year: PropTypes.string,
      code: PropTypes.string,
      school: PropTypes.string,
      link: PropTypes.string
    })
  )
}

export default Certification;
