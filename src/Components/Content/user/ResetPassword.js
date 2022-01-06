import React, { Component } from 'react';
import './user.css'
import logo from '../../../assets/Ghallah_Logo.png'
import Swal from 'sweetalert2'


export default class ResetPassword extends Component {


    constructor(props) {
        super(props);

        this.state = {
            Email: "",
            NewPassword: "",
            ConfirmNewPassword: "",
            PasswordResetCode: ""

        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSignIn = this.handleSignIn.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        console.log(this.state)
        fetch('https://ghallahstagingapi.herokuapp.com/api/Account/ResetPassword', {
            method: "POST",
            headers: {
                "Content-Type": "application/json-patch+json"
            },
            body: JSON.stringify(this.state)

        }).then((result) => {
            console.log(this.state.code)


            result.json().then((resp) => {
                if (resp.success == true) {
                    Swal.fire(
                        'Success!',
                        'Your password reseted successfully',
                        'success'
                    ).then((result) => {
                        if (result.isConfirmed) {
                            this.props.history.push("/");

                        }
                    })



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


    handleSignIn(event) {
        this.props.history.push("/");
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

                    <form className="ResetPasswordFormOne" onSubmit={this.handleSubmit}>
                        <div className="form__header">
                            <img className="logo" src={logo} />

                            <div className="triangle"> </div>
                        </div>

                        <div className="form__body">
                            <p className="title">Reset your password</p>
                            <p className="description">   </p>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={(e) => { this.setState({ Email: e.target.value }) }}
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={(e) => { this.setState({ NewPassword: e.target.value }) }}
                            />

                            <input
                                type="password"
                                name="cpassword"
                                placeholder="conform password"
                                value={this.state.cpassword}
                                onChange={(e) => { this.setState({ ConfirmNewPassword: e.target.value }) }}

                            />

                            <input
                                type="code"
                                name="code"
                                placeholder="code"
                                value={this.state.code}
                                onChange={(e) => { this.setState({ PasswordResetCode: e.target.value }) }}

                            />



                            <button>Reset Password</button>
                            <p className="signup"> Have an account? <a href="#" onClick={this.handleSignIn} className="signB"> Sign in</a> </p>
                            <p className="disclaimer">
                                @copyright 2020, made with love by &#127796;  </p>
                        </div>
                    </form>

                </div>

            </div>

        );
    }
}

