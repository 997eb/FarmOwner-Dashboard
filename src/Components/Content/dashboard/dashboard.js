import React, {Component} from 'react';
import Chart from "chart.js";
import '../content.css'
import Palms from '../../Content/cards/PalmsN'
import Checkes from '../../Content/cards/CheckedN'
import Branches from '../../Content/cards/BrancesN'
import {fetchData} from '../../../API'
import Palmstatus from "../dataSegmentations/Palmstatus";
import PalmType from '../dataSegmentations/PalmType'
import EmployeeTasks from '../MonthlyPerformance/EmployeeTasks'
import MonthlyPerformance from '../MonthlyPerformance/MonthTasks'
import Picker from "../MonthlyPerformance/Picker";
import Dpicker from "../MonthlyPerformance/employeePicker";
import News from '../News/news'




Chart.defaults.global.defaultFontFamily = "'Roboto', Bold 700"

export default class Dashboard extends Component {

    state = {
        picker:'',
        dicker:'',
        data:{},

    };

    handlePickerChange = async (picker) => {
        const fetcedData = await fetchData(picker);
        this.setState({data: fetcedData ,picker: picker})
        console.log(fetcedData)

    }


    handleDPickerChange = async (dicker) => {
        const fetcedData = await fetchData(dicker);
        this.setState({data: fetcedData ,dicker: dicker})
        console.log(fetcedData)

    }
    async componentDidMount() {

        window.addEventListener('resize', this.resize);
        document.body.style.background = 'rgb(246, 246, 246)';
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { cardsDrawerOpen: !prevState.cardsDrawerOpen }
        })
    }

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    resize = () => this.forceUpdate();

    render() {
        const { data,picker,dicker} = this.state;
     
        return (
            
            <div className="wrapper">

            <div className="row1coloum1">

               <News/>
            </div>

            <div className="row1coloum2">
               <Palms/>
               </div>

               <div className="row1coloum3">
               <Checkes/>
               </div>
               <div className="row1coloum4">
               <Branches/>
               </div>

               <div className="row2coloum1">
               <div className="chartName">
                    <p className="staticName">Daily Tasks</p>
                    <div className="expand">
                    <Picker handlePickerChange = {this.handlePickerChange}/>
                    </div>
                </div>
               <MonthlyPerformance data={data} picker={picker}/>

               </div>
               <div className="row2coloum2">
               <div className="chartName">
                    <p className="staticName">Palm Type</p>
                </div>
                <PalmType/>
</div>
               <div className="row3coloum1">

               <div className="chartName">
                    <p className="staticName">Employees </p>

                    <div className="expand">
                        <Dpicker handleDPickerChange = {this.handleDPickerChange}/>
                    </div>
                </div>
                <EmployeeTasks data={data} dicker={dicker}/>
            </div>


            <div className="row3coloum2">

            <div className="chartName">
                    <p className="staticName">Palm Status</p>
                </div>
                <Palmstatus/>
            </div>
</div>

        );
    }
}

