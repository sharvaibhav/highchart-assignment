import React, {Component} from 'react';
import './reporting.css'
class Reporting extends Component {
    render(){
        return(
            <div className='reporting'>
                <h2> Please press the button to download the Report </h2>
                <a href="/api/healthReport" target="_blank">
                    <button className="download-report-button">Download Report</button>
                </a>
            </div>
        );
    }
}

export default Reporting;