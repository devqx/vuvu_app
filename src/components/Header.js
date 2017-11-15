import React, { Component } from 'react';
import './header.css';
import logo from '../static/logo.png';
import Slides from '../components/Slides';
import { Router, Route, Switch, Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return (
            <div>
           
            <div className="navbar">
                <span className="logo"><a href="/"> <img src={logo} alt="" height="140px"/> </a></span>
                <ul className="nav">
                    <li className="nav_item">
                       <Link to="/slides"> Home </Link>
                    </li>
    
                    <li className="nav_item">
                        <Link to="/about"> About </Link>
                    </li>
    
                    <li className="nav_item">
                        <Link to="/why_vuvu"> Why Vuvu </Link>
                    </li>
    
                    <li className="nav_item">
                        <Link to="/activities"> Activities </Link>
                    </li>
    
                    <li className="nav_item">
                        <Link to="/join_vuvu"> Join </Link> 
                    </li>
    
                </ul>
            </div>
          <Route path="/slides" component={Slides}></Route>
       </div>

        )
    }
}

    


export default Header;