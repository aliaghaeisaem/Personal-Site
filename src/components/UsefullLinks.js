import React, { Component } from "react";
import PropTypes from "prop-types";

import LinkBar from "./Links/LinkBar";
import CategoryButton from "./Links/CategoryButton";

const handleProps = ({ links, categories }) => ({
  buttons: categories
    .map(cat => cat.name)
    .reduce(
      (obj, key) => ({
        ...obj,
        [key]: false
      }),
      { All: true }
    ),
  links: links.map(link =>
    Object.assign(link, {
      category: link.category
    })
  )
});

class UsefullLinks extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({
      links: props.links,
      categories: props.categories
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      handleProps({ categories: nextProps.categories, links: nextProps.links })
    );
  }

  getRows() {
    // search for true active category
    const actCat = Object.keys(this.state.buttons).reduce(
      (cat, key) => (this.state.buttons[key] ? key : cat),
      "All"
    );

    return this.state.links
      .sort()
      .filter(link => actCat === "All" || link.category === actCat)
      .map(link => (
        <LinkBar
          categories={this.props.categories}
          data={link}
          key={link.title}
        />
      ));
  }

  getButtons() {
    return Object.keys(this.state.buttons).map(key => (
      <CategoryButton
        label={key}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }

  handleChildClick = label => {
    this.setState(prevState => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce(
        (obj, key) => ({
          ...obj,
          [key]: label === key && !prevState.buttons[key]
        }),
        {}
      );
      // Turn on 'All' button if other buttons are off
      buttons.All = !Object.keys(prevState.buttons).some(key => buttons[key]);
      return { buttons };
    });
  };

  render() {
    return (
      <div className="links">
        <div className="link-to" id="links" />
        <div className="link-button-container">{this.getButtons()}</div>
        <div className="link-row-container">{this.getRows()}</div>
      </div>
    );
  }
}

UsefullLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      category: PropTypes.string
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
};

UsefullLinks.defaultProps = {
  links: [],
  categories: []
};

export default UsefullLinks;
