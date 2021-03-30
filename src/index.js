import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';


ReactDOM.render(
  // eslint-disable-next-line react/jsx-pascal-case
  <FirebaseContext.provider value={{ firebase, FieldValue }}>
    <App /> 
  </FirebaseContext.provider>,

  document.getElementById('root')
);

