import React , { Component } from 'react';
import './Welcome.css';

export default class Welcome extends Component {
    render(){
        return (

            <section>
            <div className="vuvu_logo">
                <img src="/static/logo.png" alt="" height="180px" />
            </div>
           
           <div className="welcome_message">
                <h1> WHATS VUVUTAG ? </h1>
                <hr style={{'width': '60px'}}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                     eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation
                     eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation 
                     eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation  
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                
               <button className="btn_tour">
                   Latest Activities
               </button>
           </div>
    
          
    
        </section>
    
        )
    }
    
}
