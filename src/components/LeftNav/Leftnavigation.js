import React from 'react';
import {navigationItems} from '../../dummyData/dummyDataStore'
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './leftnav.css';

 const  LeftNavigation = () =>{

    return (<div className='left-navigation col-md-2 row'>
                
                <div className='row head-left-nav container'>
                    <div className='col-md-8 '><h2> Board </h2> </div> 
                    
                </div>
                
                <ul className='navigation-list row'>
                {navigationItems.map((entry,index)=>{
                    return <li key={index} className ={`nav-entry ${entry.active? 'active' : ''}`}>  <i className={entry.icon}><FontAwesome name={entry.icon} /> </i> <Link to={entry.link}>{entry.label}</Link> </li>
                })}
                </ul>
            </div>);
}

export default LeftNavigation;