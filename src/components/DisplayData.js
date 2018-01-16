import React from 'react'
import {connect} from 'react-redux';
import _ from 'lodash';
import * as Actions from '../actions/index.js';
import DisplayProduct from './DisplayProduct.js';
//import Navigation from './Navigation.js';
import ReactPaginate from 'react-paginate';
class DisplayData extends React.Component{
    
    renderData=()=>{
        const copyData=Object.assign({},this.props.data.data)
        console.log ('datacopy', copyData)
        const hits=copyData.hits;
        console.log('hits', hits)
        return _.map(hits, item=>{
          console.log ('item', item)
           return <DisplayProduct product={item} key={item._id}/>
        })
    }


handlePageClick = (page) => {
    let selected_page = page.selected;
    const value = {searchBar: this.props.data.name};
    this.props.performQuery(value, selected_page)
}
    
    render(){
        const copyData=Object.assign({}, this.props.data.data)
        const totalHits = copyData.total;
        const pageCount = Math.ceil(totalHits / 5);
        return <div>
                   <div>
                     
                   </div>
                <div>
                    {this.renderData()}
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
                        pageCount={pageCount}
                        /> 
                </div>
               </div>

        
    }
}
function mapStateToProps (state){
    return {data: state.display}
};
export default connect(mapStateToProps, Actions)(DisplayData);