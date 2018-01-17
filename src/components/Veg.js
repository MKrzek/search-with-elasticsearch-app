import React from "react";
import Navigation from "./Navigation.js";
import Categories from "./Categories";

export default class Veg extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Categories category="vegetable" history={this.props.history} />
      </div>
    );
  }
}
