import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";
import profileImage from "../../images/personal.jpg";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={profileImage} alt="" />
      </Link>
      <header>
        <h2>Ali Aghaei Saem</h2>
        <p>
          <a href="mailto:a.aghaei.s@gmail.com">
            {"a.aghaei.s@gmail.com"}
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <span>Hello!</span>
      <p>
        I&apos;m Ali, a student with strong curiosity about new science and also an engineer.
        I ranked 1st among 128 students for my B.Sc. degree in Telecommunications from the{" "}  
        <a href="https://ece.ut.ac.ir/en/ece"> 
               School of Electrical and Computer Engineering
        </a>{" "}
         at the University of Tehran. Currently I&apos;m a student in the{" "}
        <a href="http://ee.sharif.edu/~web/en/">
          School of Electrical Engineering 
        </a>{" "}
        at the Sharif University of Technology with M.Sc. focused in microwave and photonics. 
        My research interests include RF and milimeter wave design and measurement, applied physics, 
        application of signal/image processing in health issues, and GNSS systems simulation using SDR. 
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !==
          `${process.env.REACT_APP_BASE_PATH}/resume` ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="updatedOn">Updated on 10/9/19</p>
      <p className="copyright">
        Forked from{" "}
        <a href="https://gitlab.com/aranjbar/me">me</a>.
      </p>
    </section>
  </section>
);

export default Nav;
