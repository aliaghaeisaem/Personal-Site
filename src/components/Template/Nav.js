import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";
import profileImage from "../../images/me_icon.png";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={profileImage} alt="" />
      </Link>
      <header>
        <h2>Ali Ranjbar</h2>
        <p>
          <a href="mailto:ali1377ranjbar@gmail.com">
            {"ali1377ranjbar{at - sign}gmail.com"}
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <span>Hello</span>
      <p>
        I&apos;m Ali, a student in the{" "}
        <a href="https://ece.ut.ac.ir/en/ece">
          School of Electrical and Computer Engineering
        </a>{" "}
        at University of Tehran with an Undergraduate focused in
        Telecommunications Engineering... 
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
