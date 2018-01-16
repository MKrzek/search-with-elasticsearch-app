import React from 'react'
import Navigation from './Navigation.js';
import {connect} from 'react-redux';
import DisplayProduct from './DisplayProduct.js';
import * as Actions from '../actions/index.js';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
class Alcohol extends React.Component {

    componentDidMount() {
        const value = 'alcohol';
        const page_selected=0;
        this.props.fetchCategory(value, page_selected)
    }
    renderCat = () => {
        return _.map(this.props.alcohol.hits, alcohol => {
            return <DisplayProduct product={alcohol} key={alcohol._id}/>
        })
    }
   handlePageClick = (page) => {
    let page_selected = page.selected
    const value = 'alcohol';
    this.props.fetchCategory(value, page_selected);
     this.props.history.push(`/alcohol/page=${page_selected + 1}`)

}

    render() {
        const totalHits = this.props.alcohol.total
        const pageCount = Math.ceil(totalHits / 5);
        return <div>
            <div>
                <Navigation/>
            </div>
            <h2>Alcohol</h2>
            <div>
                {this.renderCat()}
            <div> 
                <ReactPaginate
                    nextLabel={'next'}
                    previousLabel={'previous'}
                    activeClassName={'active'}
                    subContainerClassName={'pages pagination'}
                    containerClassName={'pagination'}
                    breakClassName={'break-me'}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={this.handlePageClick}
                    pageCount={pageCount}/> 
            </div>

            </div>

        </div>
    }
}

function mapStateToProps(state) {
    return {alcohol: state.category}
};
export default connect(mapStateToProps, Actions)(Alcohol);