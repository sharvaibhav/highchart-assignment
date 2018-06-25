import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css'
import 'font-awesome/css/font-awesome.css';
import Main   from "./components/main";
import {
  BrowserRouter,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter  className="App">
        <Main />
      </BrowserRouter >
      </div>
    );
  }
}

export default App;
