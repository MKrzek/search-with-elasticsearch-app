import React from "react";
import { connect } from "react-redux";
import DisplayProduct from "./DisplayProduct.js";
import * as Actions from "../actions/index.js";
import ReactPaginate from "react-paginate";

import _ from "lodash";
class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }
  componentDidMount() {
    const value = this.props.category;
    const page_selected = 0;
    this.props.fetchCategory(value, page_selected);
  }
  renderCat = () => {
    return _.map(this.props.data.hits, item => {
      return <DisplayProduct product={item} key={item._id} />;
    });
  };

  handlePageClick = page => {
    let page_selected = page.selected;
    const value = this.props.category;
    if (this.state.render) {
      this.props.sortByPrice(value, page_selected);
    } else {
      this.props.fetchCategory(value, page_selected);
    }
    this.props.history.push(
      `/${this.props.category}/page=${page_selected + 1}`
    );
  };

  priceAsc = () => {
    const value = this.props.category;
    const page_selected = 0;
    this.props.sortByPrice(value, page_selected);
    this.setState({ render: true });
    this.props.history.push(
      `/${this.props.category}/page=${page_selected + 1}`
    );
  };
  priceDesc = () => {
    const value = this.props.category;
    const page_selected = 0;
    this.props.fetchCategory(value, page_selected);
    this.setState({ render: false });
    this.props.history.push(
      `/${this.props.category}/page=${page_selected + 1}`
    );
  };

  render() {
    const totalHits = this.props.data.total;
    const pageCount = Math.ceil(totalHits / 5);
    return (
      <div>
        <div />
        <div className="container">
          <div className="row">
            <h2>{this.props.category}</h2>
            <button className="btn btn-primary ml-4" onClick={this.priceAsc}>
              Highest First
            </button>
            <button className="btn btn-primary ml-4" onClick={this.priceDesc}>
              Lowest First
            </button>
          </div>
        </div>

        <div>
          {this.renderCat()}
          <div>
            <ReactPaginate
              nextLabel={"next"}
              previousLabel={"previous"}
              activeClassName={"active"}
              subContainerClassName={"pages pagination"}
              containerClassName={"pagination"}
              breakClassName={"break-me"}
              pageRangeDisplayed={5}
              marginPagesDisplayed={3}
              onPageChange={this.handlePageClick}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.category };
}
export default connect(mapStateToProps, Actions)(Categories);
