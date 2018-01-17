import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import * as Actions from "../actions/index.js";
import { Redirect } from "react-router-dom";
import Navigation from "./Navigation.js";
import DisplayData from "./DisplayData.js";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }

  renderSearchBar = field => {
    return (
      <fieldset className="form-group">
        <label className="col form-label">{field.label}</label>
        <input {...field.input} type={field.type} />
        <div>{field.meta.touched ? field.meta.error : ""}</div>
      </fieldset>
    );
  };

  submitSearchTerm = value => {
    const selected_page = 0;
    this.props.performQuery(value, selected_page);
    this.setState({
      render: true
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(this.submitSearchTerm)}>
            <Field
              name="searchBar"
              label="enter your query"
              component={this.renderSearchBar}
              type="text"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
        <div>
          {this.state.render ? (
            <Redirect to={{ pathname: "/products/page=1" }} />
          ) : null}
          {this.state.render ? <DisplayData /> : null}
        </div>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  if (!values.SearchBar) {
    errors.SearchBar = "Please enter your query";
  }
  console.log("errors", errors);
  return errors;
}

export default connect(null, Actions)(
  reduxForm({
    form: "searchBar",
    validate
  })(SearchBar)
);
