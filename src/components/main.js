import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Reporting from "./Reporting";
import LeftNavigation from "./Leftnavigation";
export default class Main extends Component {
    render(){
        return (
            <div className='container-fluid main-section'>
                <LeftNavigation />
                <main className='content-section col-md-10'>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/reporting" component={Reporting} />
                </main>
            </div>
        );
    }
}