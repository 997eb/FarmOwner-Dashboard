import React, { Component, useRef, useEffect, useState } from 'react';
import Chart from "chart.js";
import './NewCards.css'
import palm from '../../../assets/palm-leaf.png'
import palmColor from '../../../assets/palm-tree-3.png'
import CountUp from 'react-countup';
import '../content.css'

import { fetchPalmsData } from "../../../API";
Chart.defaults.global.defaultFontFamily = "'Roboto', Bold 700"


export default class Cards extends Component {

    state = {
        dataP: 0,

    }

    async componentDidMount() {

        await fetchPalmsData().then((res) => {
            const data = res.data.result.palms
            console.log("here is the palms")
            console.log(data)
            this.setState({ dataP: data.length });
        })
            .catch((error) => {
                console.error(error)
            })

    }

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            palmSrc: palm,
            bgColor: "#ffffff",

        };

        this.handleCaed1 = this.handleCaed1.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);

    }
    handleCaed1() {
        this.setState({
            palmSrc: palmColor,
        });

    }



    handleMouseOut() {
        this.setState({
            palmSrc: palm,

            bgColor: "#ffffff"

        });
    }


    render() {
        if (!this.state.dataP) {
            return (
                <div className="container1">

                </div>);
        } else {
            return (

                <div>
                    <img className="cardIcon" src={palm} />

                    <div>
                        <CountUp className="cardNumberW" end={this.state.dataP} />
                        <div className="cardNameW">Palms Number</div>
                    </div>

                </div>


            );
        }
    }
}


