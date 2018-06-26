import React, {Component} from 'react';
import Chart from './charts/Chart';
import {  barLineChartConfigBP, lineChartConfigHeartrate, bloodComponents, urineComponents  } from "../dummyData/dummyDataStore";

class Dashboard extends Component {
    render(){
        return(<div className='dashboard'>
                <div className='row'>
                    <div className='col-md-6 blood-preasure'> <Chart  config={barLineChartConfigBP}/> </div>
                    <div className='col-md-6 pulse'> <Chart  config={lineChartConfigHeartrate}/> </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 blood-componsition'> <Chart  config={bloodComponents}/> </div>
                    <div className='col-md-6 urine-composition'> <Chart  config={urineComponents}/> </div>
                </div>
            </div>)
    }
}

export default Dashboard;