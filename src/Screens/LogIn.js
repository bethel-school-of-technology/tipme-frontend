import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 

link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'index.css';  
  



head.appendChild(link);  

​
class Login extends Component {
 constructor(props) {
    super(props);
    this.state = {   
        username: '',
        password: ''
    }
​
this.handleChange = this.handleChange.bind(this);    
this.submit = this.submit.bind(this);
 };
​
  handleChange(event) {
    const {name, value } = event.target;
    this.setState({[name]: value});
  }
​
  submit(event) { 
      event.preventDefault(); 
      console.log(this.state);
      const user = {username: this.state.username, password: this.state.password}; 
      Axios.post('http://localhost:3001/login', user)
      .then(response => { 
          console.log(response);
          if (response.data.status === 200) {
              localStorage.setItem("name", response.data.user.username)
              this.props.history.push("/profile");  // redirect page to the profile component after form submission.
          } else {
              if (response.data.status === 400 || 401) {
                  window.alert(response.data.message);
              }
          }
      })
  }
​
    render () {
        return (
            <div>
                <h1>Please login to use TipMe</h1>
                <form onSubmit={this.submit} >
                    <label htmlFor="username">Username</label>
                    <input onChange={this.handleChange} type="text" name="username" id="username" /><br/>
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="text" name="password" id="password"/><br/>
                    <button type="submit">submit</button>
                </form>
                    <Link to="/signup"> <button>Signup</button> </Link>
            </div>
        )
    }
}
export default withRouter(Login);