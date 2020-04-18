import React, { Fragment } from "react";
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

export default class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username:"",
    password:""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      username:"",
      password:""
    });
    this.props.onChange({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        username:"",
        password:""
      });
  };

  render() {
    return (
      <Fragment>
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
      </form></Fragment>
    );
  }
}
