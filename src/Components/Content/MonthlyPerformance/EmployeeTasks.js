import React, {Component, useEffect, useState} from 'react';
import Chart from "chart.js";
import './employeeTasks.css'
import {fetchDailyData} from "../../../API";
import {Bar, Line} from "react-chartjs-2";
Chart.defaults.global.defaultFontFamily = "'Roboto', Bold 700"
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;
/*

  state = {
    dataL: [],
  } //API Information ...

  async componentDidMount() {

    await fetchTasks().then((res) => {
      const data = res.data.result.checklists
      console.log(data)
    this.setState({ dataL: data });
    })
      .catch((error) => {
        console.error(error)
      })

  }
*/

const ETasks = ({data:{confirmed,deaths,recovered}, dicker}) => {

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyData();
            setDailyData(initialDailyData);
        };

        fetchMyAPI();
    }, []);

  
const lineChart = (

   // dailyData[0] ? (
        <Bar
            data={{
                
                labels: [65,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4],
                datasets: [{
                    data: [6,2.4,4,3,2.9,4,3,2.7,4,3,2.2,4,3,2.3,4,3,2,4],
                    label: 'Infected',
                    backgroundColor: 'rgba(0, 184, 86, 1)',
                /* backgroundColor: '#548c50'*/

                }],
            }
            }

            options={{
                elements: {
                    line: {
                        tension: 0.5
                    }
                },
                response:true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        barPercentage: 0.5,
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
                        left:15,
                        bottom: 15,
                        right:20,
                    },
                    tension:1,
                }
            }}
        />

   // ) : null
);
    const specificLineChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered','Deaths'],
                    datasets: [{
                        data: [confirmed.value, recovered.value,deaths.value],
                        label: 'Infected',
                        backgroundColor: "#00c15a",

                    }
                    ],
                }}
                options={{
                    response:true,
                    maintainAspectRatio: false,
                    elements: {
                        line: {
                            tension: 0.5
                        }
                    },
                    response:true,
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
                            left:15,
                            bottom: 15,
                            right:20,
                        },
                        tension:1,
                    }
                }}
            />

        ) : null
    );




    return  (
        <div>

            <div className = 'month'> {dicker?  specificLineChart : lineChart } </div>
        </div>
    );
}

export default ETasks;
