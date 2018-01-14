import React from 'react'
import {connect} from 'react-redux';
import _ from 'lodash';

import DisplayProduct from './DisplayProduct.js';

class DisplayData extends React.Component{
    
    renderData=()=>{
        return _.map(this.props.data, item=>{
            console.log ('item', item)
            return <DisplayProduct product={item} key={item._id}/>
        })
    }
    
    render(){
        console.log ('this.props.data', this.props.data)
        return <div>
                    {this.renderData()}
               </div>

        
    }
}
function mapStateToProps (state){
    return {data: state.display}
};
export default connect(mapStateToProps, null)(DisplayData)