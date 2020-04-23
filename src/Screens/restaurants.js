import React from 'react';
import Axios from 'axios';


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
    <div>

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
    
  );
};

export default ListRestaurants;
