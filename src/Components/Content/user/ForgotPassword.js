import React, {Component} from 'react';
import './user.css'
import logo from '../../../assets/Ghallah_Logo.png'
import Swal from 'sweetalert2'

export default class LogIn extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: " ",
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSignIn = this.handleSignIn.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        console.log(this.state)
       fetch('https://ghallahstagingapi.herokuapp.com/api/Account/ForgotPassword', {
            method: "POST",
            headers: {
                "Content-Type": "application/json-patch+json"
            },
            body: JSON.stringify(this.state)

        }).then((result) => {
            console.log(result)
        
        
            result.json().then((resp) => {
                if (resp.success == true) {
                    Swal.fire(
                        'Success!',
                        'You should receive an email with further instructions on resetting your password.',
                        'success'
                      ).then((result) => {
                        if (result.isConfirmed) {
                            this.props.history.push("/ResetPassword");
                           
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
        this.setState( {
            [event.target.name] :event.target.namr
        })
    }
    
    render() {
        return(
            <div className="containerLogin">
            <div className="wrapper2">

                <form className="ForgotPasswordFormOne" onSubmit={this.handleSubmit}>
                    <div className="form__header">
                        <img className="logo" src={logo}/>

                        <div className="triangle"> </div>
                    </div>

                    <div className="form__body">
                        <p className="title">Find your Ghallah Account </p>
                        <p className="description">Enter your email</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                        />

                        <button>Search</button>
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

