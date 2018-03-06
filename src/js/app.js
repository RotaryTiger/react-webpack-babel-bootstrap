import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
  constructor() {
    super();

    this.state = {
      isTrue: true,
    };
  }

  render() {
    return (
      <div>It is {this.isTrue}</div>
    );
  }
}

export default Example;
