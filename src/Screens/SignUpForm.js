import React, { Fragment } from "react";
import Navbar from '../components/navbar'

import '../assets/css/SignUpForm.css'


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
        <form action="/" method="POST">
      <h1>"Tipme" Sign Up Form</h1>
      <h3>Please Register to begin using Tipme</h3>
      <form>
         <div>First Name: </div> 
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <div>Last Name:</div>
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <div>E-mail:</div>
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <div>Phone:</div>
        <input
          name="phone"
          type="Phone"
          placeholder="phone"
          value={this.state.phone}
          onChange={e => this.change(e)}
        />
        <br />
        <div>Create a Username:</div>
        <input
          name="username"
          type="Username"
          placeholder="username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br />

        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      </form>

        <Navbar />
        <form onSubmit={this.handleSubmit} className="container">
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
