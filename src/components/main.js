import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import {  } from "./Leftnavigation";
import Dashboard from "./Dashboard";
import Reporting from "./Reporting";
import LeftNavigation from "./Leftnavigation";
export default class Main extends Component {
    render(){
        return (
            <div className='container-fluid'>
                <LeftNavigation />
            <main className='col-md-9'>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/reporting" component={Reporting} />
            </main>
            </div>
        );
    }
}