import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
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
      phone: ""
    });
    this.props.onChange({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      });
  };

  render() {
    return (
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
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}