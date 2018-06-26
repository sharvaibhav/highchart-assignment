import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Dashboard from "./Dashboard/Dashboard";
import Reporting from "./Reporting/Reporting";
import LeftNavigation from "./LeftNav/Leftnavigation";
import Links from "./Links/Links";
import Performance from "./Performance/Performance";
export default class Main extends Component {
    render(){
        return (
            <div className='container-fluid main-page row'>
                <LeftNavigation />
                <main className='col-md-10 content-section'>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/reporting" component={Reporting} />
                    <Route exact path="/links" component={Links} />
                    <Route exact path="/performance" component={Performance} />
                </main>
            </div>
        );
    }
}