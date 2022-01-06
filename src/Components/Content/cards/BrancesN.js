import React, {Component, useRef, useEffect, useState} from 'react';
import Chart from "chart.js";


import location from '../../../assets/location.png'
import CountUp from 'react-countup';
import '../content.css'

import {fetchDailyData, fetchBranchesData} from "../../../API";
Chart.defaults.global.defaultFontFamily = "'Roboto', Bold 700"


export default class Cards extends Component {

    state = {
        dataL: 0,
    } //API Information ...

    async componentDidMount() {
        await fetchBranchesData().then((res) => {
            const data = res.data.result.farmBranches
            console.log("here is the response ")
            console.log(res)
            this.setState({dataL:data.length});
        })
        .catch((error) => {
            console.error(error)
        })

    }

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
          
            tasksSrc:location,
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
       
            tasksSrc:location,
             bgColor: "#ffffff"

        });
    }


    render() {
        if (!this.state.dataL){
            return (
            <div className="container1">
           
            </div>);
        } else{
        return (

           
           
            <div>
            <img className="cardIcon" src={location} />

            <div>
                <CountUp className="cardNumberW" end={this.state.dataL} />
                <div className="cardNameW">Branches Number</div>
            </div>

        </div>



        );
    }}
}


