import React, { Component } from 'react';
import './user.css'
import logo from '../../../assets/Ghallah_Logo.png'
import Swal from 'sweetalert2'
import {
    Link
  } from "react-router-dom";


export default class LogIn extends Component {


    constructor(props) {
        super(props);
        

        this.state = {
            email: "",
            password: ""
        }


        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,



        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })


       

     handleSubmit(event) {


         fetch('https://ghallahstagingapi.herokuapp.com/api/Account/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json-patch+json"
            },
            body: JSON.stringify(this.state)
 
        }).then((result) => {
 
        
            result.json().then((resp) => {
                console.log(resp)
                if (resp.success == true){
                    if (resp.result.user.role =="Farm Owner"){
                    console.log('success')
                    this.Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
            
                    localStorage.setItem("name" , JSON.stringify(resp.result.user.firstName).slice(1, -1))
                    localStorage.setItem("farmId" , JSON.stringify(resp.result.user.farmId))
                    localStorage.setItem("auth", JSON.stringify(resp.result.user.token).slice(1, -1))
                    localStorage.setItem('userId', JSON.stringify(resp.result.user.id))

                    this.props.history.push("/dashboard");

 
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: "You should be a Farm Owner to log in to the dashboard!",
                        icon: 'error',
                        confirmButtonText: 'Try Again!',
                        customClass: {
                            confirmButton: 'background'
                        },
                    })
 
                }
 
                } else {
                    console.log('Faild')
                    Swal.fire({
                        title: 'Error!',
                        text: resp.result.message,
                        icon: 'error',
                        confirmButtonText: 'Try Again!',
                        customClass: {
                            confirmButton: 'background'
                        },
                    })
                }
 
            })
        })
        event.preventDefault();
        
    }



    handleSignUp(event) {
        this.props.history.push("/forgotPassword");
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.namr
        })
    }


    render() {
        return (
            <div className="containerLogin">
                <div className="wrapper2">

                    <form className="Signinform" onSubmit={this.handleSubmit}>
                        <div className="form__header">
                            <img className="logo" src={logo} />

                            <div className="triangle"> </div>
                        </div>

                        <div className="form__body">
                            <p className="title">Sign in to Ghallah System  </p>
                            <p className="description">Farm Owner Dashboard.</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={(e) => { this.setState({ email: e.target.value }) }}
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                            />
                            <button>Log in</button>
                            <p className="signup"> forgot password? <a href="#" onClick={this.handleSignUp} className="signB"> click here ! </a> </p>
                            <p className="disclaimer">
                                @copyright 2020, made with love by &#127796;  </p>
                        </div>
                    </form>

                </div>

            </div>




        );
    }
}

