/* globals document */
import React from 'react';
import { render } from 'react-dom';
import dog from '../img/ghost_dog.jpg';
import '../css/style.css';

const title = 'bootscrap';

export default class Bootscrap extends React.Component {
  render() {
    return (
      <div>
        <h2>{title}</h2>
        <img
          id="ghost-dog"
          src={dog}
          alt="ghost dog"
        />
      </div>
    );
  }
}

render(<Bootscrap />, document.getElementById('app'));

module.hot.accept();
