import React from 'react';
import NotFoundImage from '../assets/images/detectivepikachu.png';

const NotFound = () => (
  <center>
    <p>404 Error!</p>
    <p>Page not found</p>
    <img
      style={{ height: '30vh' }}
      src={NotFoundImage}
      alt="Page not found"
    />
  </center>
);

export default NotFound;