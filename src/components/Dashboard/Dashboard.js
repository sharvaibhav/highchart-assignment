import React from 'react';
import Chart from '../charts/Chart';
import FontAwesome from 'react-fontawesome';
import "./dashboard.css"
import {  barLineChartConfigBP, lineChartConfigHeartrate, bloodComponents, urineComponents  } from "../../dummyData/dummyDataStore";

const Dashboard = () =>{
    return (<div className='dashboard'>
                <div className='row heading-section-dashboard'>
                    <div className='' > <span className='hamburger col-md-1'> <FontAwesome name='bars' />   </span> <input className ='col-md-10 input-search' /> <button className='btn btn-default col-md-1 logout-button'> Logout </button> </div>
                    <div className="col-md-12"> <h2 className='text-center'> Patient Dashboard </h2> </div>
                    
                </div>
                <div className='row'>
                    <div className='col-md-6 blood-preasure'> <Chart  config={barLineChartConfigBP}/> </div>
                    <div className='col-md-6 pulse'> <Chart  config={lineChartConfigHeartrate}/> </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 blood-componsition'> <Chart  config={bloodComponents}/> </div>
                    <div className='col-md-6 urine-composition'> <Chart  config={urineComponents}/> </div>
                </div>
            </div>);
}

export default Dashboard;