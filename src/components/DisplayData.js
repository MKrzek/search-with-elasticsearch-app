import React from 'react'
import {connect} from 'react-redux';
import _ from 'lodash';

import DisplayProduct from './DisplayProduct.js';
import Navigation from './Navigation.js';
class DisplayData extends React.Component{
    
    renderData=()=>{
        console.log ('length', this.props.data.length)
        return _.map(this.props.data, item=>{
            console.log ('item', item)
            return <DisplayProduct product={item} key={item._id}/>
        })
    }
    
    render(){
        console.log ('this.props.data', this.props.data)
        return <div>
                   <div>
                       <Navigation />
                   </div>
                <div>
                    {this.renderData()}
               </div>
               </div>

        
    }
}
function mapStateToProps (state){
    return {data: state.display}
};
export default connect(mapStateToProps, null)(DisplayData);