import React , { Component } from 'react';
import './Features.css';
import userIcon from '../static/user.png';

export default class Features extends Component {
    render(){
        return (

            <div>
            <h1 className="text-center"> A New Kind Of Social </h1>
            <hr style={{'width':'60px'}} />
        <section className="container">
            <div>
                <div className="col">
                    <h1>Connect With Friends </h1>
                   
                    <center><img src={userIcon}  alt="" /></center>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    </p>
                </div>
    
                <div className="col">
                <h1> Tag With Any One </h1>
                <center><img src={userIcon} alt=""/></center>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    </p>
                </div>
    
                <div className="col">
                <h1> Take Rides </h1>
                <center><img src={userIcon} alt=""/></center>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    </p>
                </div>
    
                <div className="col">
                <h1> Socialise </h1>
                <center><img src={userIcon} alt=""/></center>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    </p>
                </div>
    
    
                <div className="col">
                <h1> Create Events </h1>
                <center><img src={ userIcon } alt=""/></center>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    </p>
                </div>
    
                <div className="col">
                <h1> Meet Any One </h1>
                <center><img src={ userIcon } alt=""/></center>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    </p>
                </div>
    
            </div>
    
        </section>
            </div>
        )
    }
    
}
