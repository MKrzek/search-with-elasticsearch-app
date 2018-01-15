import React from 'react'
import Navigation from './Navigation.js';
import {connect} from 'react-redux';
import DisplayProduct from './DisplayProduct.js';
import * as Actions from '../actions/index.js';

import _ from 'lodash';
class Veg extends React.Component {

    componentDidMount() {
        const value = 'vegetable';
        this.props.fetchCategory(value)
    }
    renderCat = () => {
        return _.map(this.props.veg, veg => {
            return <DisplayProduct product={veg} key={veg._id}/>
        })
    }

    render() {
        return <div>
            <div>
                <Navigation/>
            </div>
            <div>
                {this.renderCat()}
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {veg: state.category}
};
export default connect(mapStateToProps, Actions)(Veg);