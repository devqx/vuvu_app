import React , { Component } from 'react';
import './VuvuNum.css';

export default class VuvuNum extends Component {

    render(){

        return(
            <div>
            <h1 className="text-center">
                VuVuTag In Numbers 
            </h1>
            <hr style={{'width': '60px'}} />
        <section className="container-vuvu">
            <div className="stats">
                <h2>  Active Users  </h2>
                <span className="number"> 9800202 </span>
            </div>
    
            <div className="stats">
                <h2>  Events Created </h2>
                <span className="number"> 9800202 </span>
            </div>
    
            <div className="stats">
                <h2>  Users Tagged </h2>
                <span className="number"> 9800202 </span>
            </div>
    
        </section>
        <center><a href="" className="join_btn"> Get Started </a></center>
        </div>
        )
    }
}


















 

   