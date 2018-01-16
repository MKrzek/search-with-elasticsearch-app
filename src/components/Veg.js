import React from 'react'
import Navigation from './Navigation.js';
import {connect} from 'react-redux';
import DisplayProduct from './DisplayProduct.js';
import * as Actions from '../actions/index.js';
import ReactPaginate from 'react-paginate';

import _ from 'lodash';
class Veg extends React.Component {

    componentDidMount() {
        const value = 'vegetable';
        const page_selected = 0;
         this.props.fetchCategory(value, page_selected)
    }

    renderCat = () => {
        return _.map(this.props.veg.hits, veg => {
            return <DisplayProduct product={veg} key={veg._id}/>
        })
    }
    
    handlePageClick = (page) => {
    let page_selected = page.selected
    const value = 'vegetable';
    this.props.fetchCategory(value, page_selected);
     this.props.history.push(`/veg/page=${page_selected + 1}`)

}

    render() {
    const totalHits = this.props.veg.total;
    const pageCount = Math.ceil(totalHits / 5);
    
        return <div>
            <div>
                <Navigation/>
            </div>
            <h2>Vegetables</h2>
            <div>
                {this.renderCat()}
            </div>
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

        
    }
}

function mapStateToProps(state) {
    return {veg: state.category}
};
export default connect(mapStateToProps, Actions)(Veg);