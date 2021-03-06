import React, {Component} from 'react';
import {navigationItems} from '../dummyData/dummyDataStore'
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './leftnav.css';

class LeftNavigation extends Component {

    render(){
        return(<div className='left-navigation col-md-2'>
            <h2> Board </h2>
                <ul className='navigation-list row'>
                {navigationItems.map((entry)=>{
                    return <li >  <i className={entry.icon}><FontAwesome name={entry.icon} /> </i> <Link to={entry.link}>{entry.label}</Link> </li>
                })}
                </ul>
            </div>)
    }
}

export default LeftNavigation;