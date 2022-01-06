import React, {Component, useRef, useEffect, useState} from 'react';
import Chart from "chart.js";

import ReactDom from 'react-dom'
import CountUp from 'react-countup';
import '../content.css'
import checked from  '../../../assets/checked.png'

import {fetchCheckedPalms} from "../../../API";
Chart.defaults.global.defaultFontFamily = "'Roboto', Bold 700"


export default class Cards extends Component {

    state = {
        dataP:0,
     
    } //API Information ...

    async componentDidMount() {

         await  fetchCheckedPalms().then((res) => {
             const data = res.data.result.palms
             console.log('Checked palm')
             console.log(data)
             this.setState({dataP:data.length});
         })
         .catch((error) => {
             console.error(error)
         })
 
     }

    constructor(props) {
        super(props);
        this.state = {
            //basic setting ..
            hover: false,
          
            bgColor: "#ffffff",

        };

        this.handleCard4 = this.handleCard4.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
  


    handleCard4() {
        this.setState({

        });
    }


    handleMouseOut() {
        this.setState({
        
             bgColor: "#ffffff"

        });
    }


    render() {
        if (!this.state.dataP){
            return (
            <div className="container1">

            </div>);
        } else{
        return (

           
            <div>
            <img className="cardIcon" src={checked} />

            <div>
                <CountUp className="cardNumberW" end={this.state.dataP} />
                <div className="cardNameW">Checked Palms</div>
            </div>

        </div>


        );
    }}
}


