import React, { Fragment } from 'react';
import Navbar from '../components/navbar'
import Axios from 'axios';

// import '../assets/css/SignUpForm.css'


class SignUpForm extends React.Component {
      constructor() {
          super();
  
          this.state = {
            firstname: "",
            lastname: "",
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

submit(event) {
  event.preventDefault();
  console.log(this.state);
  const user = { firstname: this.state.firstname, lastname: this.state.lastname,
  email: this.state.email, phone: this.state.email, username: this.state.username,
password: this.state.password };
Axios.post('http://localhost:3001/signupform', user)
.then(response => {
  
  console.log(response);
  if(response.data.status === 200) {
    localStorage.setItem("name", response.data.user.username)
    this.props.history.push("./profule");
  } else {
    if (response.data.status === 400 || 401) {
      window.alert(response.data.message);
    }
  }
})
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
        <form onSubmit={this.handleSubmit} className="container">
        <header><h1>Tip Me!</h1></header>
                <h3>Sign-Up</h3>
                <h5>Please Register to begin using Tipme</h5>
          <br/>
                   
          <label>First Name:</label>
          <input
            name="First Name"
            placeholder="First Name"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <br />
          <label>Last Name:</label> 
          <input
            name="lastName"
            placeholder="Last name"
            value={this.state.lastname}
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
            value={this.state.password}
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
