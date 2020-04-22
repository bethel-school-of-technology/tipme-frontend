import React, {Fragment} from 'react';
import Axios from 'axios';
import Navbar from '../components/navbar'

import '../assets/css/login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submit(event) {
    event.preventDefault();
    console.log(this.state);
    const user = { username: this.state.username, password: this.state.password };
    Axios.post('http://localhost:3001/login', user)
      .then(response => {

        console.log(response);
        if (response.date.status === 200) {
          localStorage.setItem("name", response.data.user.username)
          this.props.history.push("/profile");

        } else {
          if (response.data.status === 400 || 401) {
            window.alert(response.data.message);
          }
        }

      })

  }

  render() {
    return (
      <Fragment>
        <Navbar />
        
        <form onSubmit={this.submit} className="container">
          <h2>Please login</h2>
          <label htmlFor="username">Username: </label>
          <input onChange={this.handleChange} type="text" name="username" id="username" /><br />
          <label htmlFor="password" >Password:</label>
          <input onChange={this.handleChange} type="password" name="password" id="password" /><br />
          <button type="submit">Submit</button>
        </form>
        </Fragment>
    )
  }

}

export default Login