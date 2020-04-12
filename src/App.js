import React from 'react';

import ListRestaurants from './components/restaurants';

app.post('/upload', (req, res, next) => {
  // console.log(req);
  let imageFile = req.files.file;
  
  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, err => {
  if (err) {
  return res.status(500).send(err);
  }
  
  res.json({ file: `public/${req.body.filename}.jpg` });
  console.log(res.json);
  });
  });

const App = () => (
  <div>

    <h4>Your TipMe Locations </h4>
     <ListRestaurants />

  </div>
);

export default App;
