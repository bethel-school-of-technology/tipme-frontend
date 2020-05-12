import React, { Fragment } from 'react';
import Navbar from '../components/navbar'
import Axios from 'axios';
import '../look/css/signUpForm.css';




class SignUpForm extends React.Component {
      constructor() {
          super();
  
          this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            username: "",
            password: ""
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }

handleChange(e) {
  let target = e.target;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let name = target.name;

  this.setState({
    [name]: value
  });
}


handleSubmit(e) {
  e.preventDefault();

  console.log('The form was submitted with the following data:');
  console.log(this.state);
}

  render() {
    return (
      <Fragment>
       
        <Navbar />
        <form onSubmit={this.handleSubmit} className="container3">
        <header><h1>Tip Me!</h1></header>
                <h3>Sign-Up</h3>
                <h5>Please Register to begin using Tipme</h5>
          <br/>
                   
          <label>First Name:</label>
          <input
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <label>Last Name:</label> 
          <input
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <label>E-mail: </label>
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Phone: </label>
          <input
            name="phone"
            type="Phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <br />
          <label>Create a Username:</label>
          <input
            name="username"
            type="Username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <label>Create a Password:</label> 
          <input
            name="password"
            type="Password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <label>Re-enter your Password: </label>
          <input 
            name="password1" 
            type="Password"
            placeholder="Password1"
            value={this.state.password1}
            onChange={this.handleChange}/>
          <br />
          <label>
          <input type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="TermsConditions.html" className="FormField__TermsLink">terms of service</a>
          </label>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>

      </Fragment>
    );
  }
}
export default SignUpForm;
