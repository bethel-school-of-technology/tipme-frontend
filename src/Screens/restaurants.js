import React, { Fragment } from 'react';
import Axios from 'axios';
import Navbar from '../components/navbar'
import '../look/css/resturants.css';
import { render } from '@testing-library/react';

class ListRestaurants extends React.Component {
  constructor(props) {
      super(props);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeAddress = this.onChangeAddress.bind(this);
      this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
          Name: '',
          Address: '',
          PhoneNumber: '',
          Completed: false
      }
  }
  onChangeName(e) {
      this.setState({
          Name: e.target.value
      });
  }
  onChangeAddress(e) {
      this.setState({
          Address: e.target.value
      });
  }
  onChangePhoneNumber(e) {
      this.setState({
          PhoneNumber: e.target.value
      });
  }
  onSubmit(e) {
      e.preventDefault();
      console.log(`Form submitted:`);
      console.log(`Name: ${this.state.Name}`);
      console.log(`Address: ${this.state.Address}`);
      console.log(`PhoneNumber: ${this.state.PhoneNumber}`);
      this.setState({
          Name: '',
          Address: '',
          PhoneNumber: '',
          Completed: false
      })
  }
  render() {
      return (
        <Fragment>
        <Navbar />          
          <form onSubmit={this.onSubmit} class="container2">
              <header><h3>Add Restaurant</h3></header>
              <div className="form-group"> 
                  <label>Name </label>
                  <input  type="text"
                          className="form-control"
                          value={this.state.Name}
                          onChange={this.onChangeName}
                          />
              </div>
              <div className="form-group">
                  <label>Location </label>
                  <input 
                          type="text" 
                          className="form-control"
                          value={this.state.Address}
                          onChange={this.onChangeAddress}
                          />
              </div>
              <div className="form-group"> 
              <label for="phone">PhoneNumber </label>
              <input  type="tel"
                      placeholder="(xxx) xxx-xxxx"
                      className="form-control"
                      value={this.state.PhoneNumber}
                      onChange={this.onChangePhoneNumber}
                      />
          </div>
              <div className="form-group" >
                  <input type="submit" value="Add Restaurant" className="btn btn-primary" />
              </div>
          </form>
      </Fragment>
      )
  }
}


export default ListRestaurants;