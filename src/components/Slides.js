import React, { Component } from 'react';
import Header from './Header';
import './slides.css';

class Slides extends Component {

    render(){
        return (
            
        <div>
            <Header></Header> 
        
        <div id="sequence">

            <ul className="seq-canvas">
                <li className="step1">
                <div className="content">
                    <h2 data-seq>Powered by VuvuTag</h2>
                    <h3 data-seq>The social Network of your choice.</h3>
                </div>
                </li>
        
                <li className="step2">
                <div className="content">
                    <h2 data-seq>Create Events and Tag Friends</h2>
                    <h3 data-seq>Meet, connect , Gist, Chat without restriction<br />Welcome to the social of network.</h3>
                </div>
                </li>
        
                <li className="step3">
                <div className="content">
                    <h2 data-seq>No Restrictions, Endless Possibilities</h2>
                    <h3 data-seq>Use the HTML and CSS syntax you're used to. <br />No JavaScript knowledge required.</h3>
                </div>
                </li>   
            </ul>

            </div> 
            </div>
        )
    
    }

    componentDidMount(){

            // Get the Sequence element
    var sequenceElement = document.getElementById("sequence");
    
        var options = {
        keyNavigation: true,
        fadeStepWhenSkipped: false,
        autoPlay: true,
        autoPlayInterval: 3000
        }

        window.sequence(sequenceElement, options );
     
    }




}


export default Slides;