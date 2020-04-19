import React, {Component} from 'react';
import axios from 'axios';

export default class restaurantList extends React.Component {
    state = {
        restaurants: [],
    };

    componentDidMount() {
        axios.get('http://localhost:3000/tipme')
        this.setState({ restaurants: res.data });
    }

    render() {
        retun (
           <ul>
               {this.state.restaurants.map(restaurant => <li>{restaurant.name}</li>)}
           </ul>
        );
    }
}
