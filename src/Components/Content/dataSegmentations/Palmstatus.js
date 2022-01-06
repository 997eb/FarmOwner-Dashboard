import React, {Component} from 'react';
import Chart from "chart.js";
import './palmstatus.css'
import {fetchUnCheckedPalms, fetchCheckedPalms, fetchInfectedPalms , fetchUnKnownPalms} from "../../../API";
Chart.defaults.global.defaultFontFamily = "'Roboto', Bold 700"

export default class PalmStatus extends Component {
    chartRef2 = React.createRef();
   
    state = {
        UnChecked: 0,
        Checked: 0,
        Infected: 0,
        UnKnown: 0,
    } //API Information ...


    async componentDidMount() {

        await fetchUnCheckedPalms().then((res) => {
            const data = res.data.result.palms
  
            this.setState({ UnChecked: data.length });
        })
            .catch((error) => {
                console.error(error)
            })


        await fetchCheckedPalms().then((res) => {
            const data = res.data.result.palms
   
            this.setState({ Checked: data.length });
        })
            .catch((error) => {
                console.error(error)
            })


        await fetchInfectedPalms().then((res) => {
            const data = res.data.result.palms
 
            this.setState({ Infected: data.length });
        })
            .catch((error) => {
                console.error(error)
            })


        await fetchUnKnownPalms().then((res) => {
            const data = res.data.result.palms
     
            this.setState({ UnKnown: data.length });
        })
            .catch((error) => {
                console.error(error)
            })

     const myChartRef2 = this.chartRef2.current.getContext("2d");
      

        new Chart(myChartRef2, {
            type: 'doughnut',
            data: {
                labels: ["Unchecked", "Checked", "Infected"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#367a3e", "#efeff4","#ea0929"],
                        data: [this.state.UnChecked, this.state.Checked ,this.state.Infected
                        ]
                    }]
                },
    
            options: {
                responsive:true,
                maintainAspectRatio: false,
                cutoutPercentage: 70,
                    layout:{
                        padding:'20'
                    },
                    legend: {
                        position: 'bottom',
                        display: true,
                        labels: {
                            fontColor: "#00001d",
                        }},
                    title: {
                        display: false,
                        text: 'Predicted world population (millions) in 2050'
                    }
                }
            });
    }


render() {

        return (
            <div>
                <div className="Data1">
                    <div className="palmStatusChart">
                    <canvas
                        id="myChart"
                        ref={this.chartRef2} >
                    </canvas>
                    </div>
                </div>
            </div>
        );
    }
}