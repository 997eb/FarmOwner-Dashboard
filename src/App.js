import React,{Component} from 'react';
import Content from './Components/Content/Content';
import User from './Components/Content/user/login'
import ForgotPassword from './Components/Content/user/ForgotPassword'
import ResetPassword from './Components/Content/user/ResetPassword'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './Components/Content/content.css'


class App extends Component {


    render() {

        return (
            <Router>
            <div className="contentContainer">
              <Switch>
                  <Route path="/"  exact
                         render={ props => (
                           <User {...props}/>
                         )}/>

                         <Route path="/dashboard" 
                         render={ props => (
                             <Content {...props}/>
                         )}/>

                         <Route path="/forgotPassword" 
                         render={ props => (
                             <ForgotPassword {...props}/>
                         )}/>
                         

                         <Route path="/ResetPassword" 
                         render={ props => (
                             <ResetPassword {...props}/>
                         )}/>

                         <Route path="/PalmTable"  render={ props => (
                          <Content {...props}/>
                         )}/>
                         
                         <Route path="/TasksTable"  render={ props => (
                          <Content {...props}/>
                         )}/>

                          <Route path="/EmployeesTable"  render={ props => (
                          <Content {...props}/>
                         )}/>

                          <Route path="/BranchesTable"  render={ props => (
                          <Content {...props}/>
                         )}/>
              </Switch>

            </div>
            </Router>
        )
    }
}
export default App