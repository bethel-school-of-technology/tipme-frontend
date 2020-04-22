import React, { Fragment } from 'react';
import Navbar from '../components/navbar'

import '../assets/css/restaurant.css'

const restaurants = [];

const ListRestaurants = () => {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(restaurants);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    if (value) {
      setList(list.concat(value));
    }

    setValue('');

    event.preventDefault();
  };

  return (
    <Fragment>
      <Navbar />
      <div className="resContainer">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Restaurants</button>
      </form>

      <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
        </ul>
        </div>
    </Fragment>
    
  );
};

export default ListRestaurants;
