import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Certification from "../components/Resume/Certification";
import Honors from "../components/Resume/Honors";
import Skills from "../components/Resume/Skills";
import Courses from "../components/Resume/Courses";
// import References from "../components/Resume/References";

import courses from "../data/resume/courses";
import degrees from "../data/resume/degrees";
import positions from "../data/resume/positions";
import certifications from "../data/resume/certifications";
import honor from "../data/resume/honor";
import { skills, categories } from "../data/resume/skills";

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
        </div>
      </header>
      <Education data={degrees} />
      <Honors data={honor} />
      <Experience data={positions} />
      <Certification data={certifications} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      {/* <References /> */}
    </article>
  </Main>
);

export default Resume;
