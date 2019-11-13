import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import UsefullLinks from "../components/UsefullLinks";

import { links, categories } from "../data/links";

const Links = () => (
  <Main>
    <Helmet title="Links" />
    <article className="post" id="links">
      <header>
        <div className="title">
          <h2>
            <Link to="/links">Links</Link>
          </h2>
          <p>Updated on 10/4/2019</p>
        </div>
      </header>
      {/* <h4>To be updated soon!</h4> */}
      <UsefullLinks links={links} categories={categories}></UsefullLinks>
    </article>
  </Main>
);

export default Links;
