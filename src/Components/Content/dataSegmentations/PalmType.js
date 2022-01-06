import React, { Component } from 'react';
import Chart from "chart.js";
import './paimType.css'
import { fetchAjwa, fetchSukkari, fetchSafwai, fetchSagei } from "../../../API";
Chart.defaults.global.defaultFontFamily = "'Roboto', Bold 700";


export default class PalmType extends Component {


    state = {
        Ajwa: 0,
        Sukkari: 0,
        Safawi: 0,
        Sagei: 0,
    } //API Information ...


    async componentDidMount() {

        await fetchAjwa().then((res) => {
            const data = res.data.result.palms
            console.log(data)
            this.setState({ Ajwa: data.length });
        })
            .catch((error) => {
                console.error(error)
            })


        await fetchSukkari().then((res) => {
            const data = res.data.result.palms
            console.log(data)
            this.setState({ Sukkari: data.length });
        })
            .catch((error) => {
                console.error(error)
            })


        await fetchSafwai().then((res) => {
            const data = res.data.result.palms
            console.log(data)
            this.setState({ Safawi: data.length });
        })
            .catch((error) => {
                console.error(error)
            })


        await fetchSagei().then((res) => {
            const data = res.data.result.palms
            console.log(data)
            this.setState({ Sagei: data.length });
        })
            .catch((error) => {
                console.error(error)
            })

        new Chart(document.getElementById("pie-chart"), {
            // type: 'polarArea',
            type: 'doughnut',
            data: {
                labels: ["Ajwa", "Sukkari", "Safawi", "Sagei"],
                datasets: [{
                    label: "Population (millions)",
                    backgroundColor: ["#eabb17", "#367a3e", "#00A3D6", "#efeff4"],
                    //here i can add the API Data 
                    data: [
                        this.state.Ajwa,
                        this.state.Sukkari,
                        this.state.Safawi,
                        this.state.Sagei
                    
                    ]
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 70,
                layout: {
                    padding: '20'
                },
                legend: {
                    position: 'bottom',
                    display: true,
                    labels: {
                        fontColor: "black",
                    }
                },
                title: {
                    display: false,
                    text: 'Predicted world population (millions) in 2050'
                }
            }
        });
    }


    render() {

        return (
            <div className="Data2">
                <div className="palmTyprChart">
                    <canvas id="pie-chart">
                    </canvas>
                </div>
            </div>
        );
    }
}




