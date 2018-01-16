import React from 'react'
import Navigation from './Navigation.js';
import {connect} from 'react-redux';
import DisplayProduct from './DisplayProduct.js';
import * as Actions from '../actions/index.js';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
class Meat extends React.Component {

    componentDidMount() {
        const value = 'meat';
        const selected_page=0;
        this.props.fetchCategory(value, selected_page)
    }
    renderCat = () => {
        return _.map(this.props.meat.hits, meat => {
            return <DisplayProduct product={meat} key={meat._id}/>
        })
    }

    handlePageClick = (page) => {
    let selected_page = page.selected
    const value = 'meat';
    this.props.fetchCategory(value, selected_page)
}
    render() {
    const totalHits = this.props.meat.total
    const pageCount = Math.ceil(totalHits / 5);
    
        return <div>
            <div>
                <Navigation/>
            </div>
             <h2>Fish and Meat</h2>
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
    return {meat: state.category}
};
export default connect(mapStateToProps, Actions)(Meat);