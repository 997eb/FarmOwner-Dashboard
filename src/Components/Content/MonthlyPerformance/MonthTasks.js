import React, { useEffect, useState } from 'react';
import Chart from "chart.js";
import { Line } from 'react-chartjs-2';
import './MonthTasks.css'
import { fetchDailyData } from "../../../API";


Chart.defaults.global.defaultFontFamily = "'Roboto', Bold 700"
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;

const MTasks = ({ data: { confirmed, deaths, recovered }, picker }) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyData();
            setDailyData(initialDailyData);
        };


        fetchMyAPI();
    }, []);


    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 450);

        gradient.addColorStop(0, 'rgba(0, 193,90, 0.50)');
        gradient.addColorStop(0.5, 'rgba(0, 193,90, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 193,90, 0)');

        console.log(dailyData)
        return {

            labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June' ],
           //labels: dailyData.map(({ date }) => date),
            datasets: [{
                label: 'Custom Label Name',
                backgroundColor: gradient,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                borderWidth: 0,
                borderColor: '#ffffff',
                data: [50, 55, 80, 81, 60, 75,58, 75, 80, 81, 54, 50]
               // data: dailyData.map((data) => data.confirmed),


            }]
        }
    }
    var options = {
        legend: {
            display: false,
        },
        elements: {
            line: {
                tension: 0.5
            }
        },
        response: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                ticks: { display: true },
                gridLines: {
                    display: false,
                    drawBorder: true
                }
            }],
            yAxes: [{
                ticks: { display: true },
                gridLines: {
                    display: false,
                    drawBorder: true
                }
            }]
        },
        layout: {

            padding: {
                top: 20,
                left: 15,
                bottom: 15,
                right: 20,
            },
            tension: 1,
        }
    };


    const lineChart = (


        // dailyData[0] ? (
        <Line

            data={data}
            options={options}
        />

        // ) : null
    );

    const specificLineChart = (
        confirmed ? (
            <Line
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        data: [confirmed.value, recovered.value, deaths.value],
                        label: 'Infected',
                        borderColor: "#00c15a",
                        fill: false,
                    }
                    ],
                }}
                options={{

                    elements: {
                        line: {
                            tension: 0.5
                        }
                    },
                    response: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            ticks: { display: true },
                            gridLines: {
                                display: false,
                                drawBorder: true
                            }
                        }],
                        yAxes: [{
                            ticks: { display: true },
                            gridLines: {
                                display: false,
                                drawBorder: true
                            }
                        }]
                    },
                    layout: {
                        padding: {
                            top: 20,
                            left: 15,
                            bottom: 15,
                            right: 20,
                        },
                        tension: 1,
                    }
                }}
            />

        ) : null
    );

    return (
        <div>

            <div className='month'> {lineChart} </div>
        </div>
    );
}

export default MTasks;


