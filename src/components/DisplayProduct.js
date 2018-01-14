import React from 'react';
export default class DisplayProduct extends React.Component{
    render(){
        console.log('individual product', this.props.product)
        const{name, price}=this.props.product._source
        return <ul className='list-group'>
                 <li className='list-group-item'>
                 {name}, £{price}
                 </li>
               </ul>
    }
}