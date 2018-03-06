/* globals document */
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'R.A.R.E. Asset Upload';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app'),
);

module.hot.accept();
