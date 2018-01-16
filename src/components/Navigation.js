import React from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component{
    render(){
        return(
             <nav className='navbar navbar-default mb-4'>
               <div className='container-fluid'>
                 <div className='navbar-header'>
                         <Link to ='/' className='navbar-brand'>Home</Link>
                 </div>
                 <ul className='nav navbar-nav navbar-right' id='navig'>
                      <li className='nav-item' key={1}>
                          <Link className='nav-link' to='/fruit/page=1'>Fruit</Link>
                      </li>
                      <li className='nav-item' key={2}>
                        <Link className='nav-link' to='/vegetables/page=1'>Vegetables</Link>
                     </li>
                     <li className='nav-item' key={3}>
                        <Link className='nav-link' to='/alcohol/page=1'>Alcohol</Link>
                     </li>
                     <li className='nav-item' key={4}>
                        <Link className='nav-link' to='/meat/page=1'>Meat</Link>
                     </li>
                      
                 </ul>
               </div>
                 
             </nav>

        )
    }}

