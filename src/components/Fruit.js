import React from 'react'
import Navigation from './Navigation.js';
import {connect} from 'react-redux';
import DisplayProduct from './DisplayProduct.js';
import * as Actions from '../actions/index.js';
import ReactPaginate from 'react-paginate';

import _ from 'lodash';
class Fruit extends React.Component{
    

componentDidMount(){
    const value='fruit';
    const selected_page=0;
    this.props.fetchCategory(value, selected_page)
}
renderFruit=()=>{
    console.log ('fruit', this.props.fruit.hits)
    
     return _.map(this.props.fruit.hits, fruit=>{
         return <DisplayProduct product={fruit} key={fruit._id}/>})  
}

handlePageClick=(page)=>{
  let selected_page=page.selected
  console.log ('selected', selected_page);
  const value='fruit';
  this.props.fetchCategory(value, selected_page)
  
}

    render(){
        const totalHits=this.props.fruit.total
        console.log ('totalHits', totalHits)
        const pageCount= Math.ceil(totalHits/5);
        console.log ('pageCount', pageCount)
        return<div>
                 <div>
                     <Navigation/>
                </div>
                <h2>Fruit</h2>
                <div>
                    {this.renderFruit()}
                    <div>
                        <ReactPaginate nextLabel={'next'}
                                       previousLabel={'previous'}
                                       activeClassName={'active'}
                                       subContainerClassName={'pages pagination'}
                                       containerClassName={'pagination'}
                                       breakClassName={'break-me'}
                                       pageRangeDisplayed={5}
                                       marginPagesDisplayed={3}
                                       onPageChange={this.handlePageClick}
                                       pageCount={pageCount}
                            

                        />
                    </div>
                </div>
        </div>
    }
}

function mapStateToProps(state){
    
    return {fruit: state.category}
};
export default connect(mapStateToProps, Actions)(Fruit);