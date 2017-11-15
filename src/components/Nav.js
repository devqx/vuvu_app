import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import  App from '../App';
import Slides from '../components/Slides';

export default class Nav extends Component{

    render(){

        return (

            <Router>
            
            <Route exact path='/' component={App} />
            <Route  path='/slides' component={Slides} />
            
            </Router>

        )
    }
}
