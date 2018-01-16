import React from 'react'
import {connect} from 'react-redux';

import _ from 'lodash';
import * as Actions from '../actions/index.js';
import DisplayProduct from './DisplayProduct.js';
import ReactPaginate from 'react-paginate';
class DisplayData extends React.Component{
    
    renderData=()=>{
        const copyData=Object.assign({},this.props.data.data)
        const hits = copyData.hits;
        if (copyData.total===0){
            return <h2>Your search returned 0 hits</h2>
        }else{ return _.map(hits, item=>{
           return <DisplayProduct product={item} key={item._id}/>
        })   
    }
}
   handlePageClick = (page) => {
        let selected_page = page.selected;
        const value = {searchBar: this.props.data.name};
        this.props.performQuery(value, selected_page);
        this.props.history.push(`/products/page=${selected_page+1}`)
       
       
} 
matchRoutes=() =>{
      return 
        
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