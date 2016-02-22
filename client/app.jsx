import React from 'react';
import Counter from './counter.jsx';

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
          <h1>My App</h1>
          <hr />
          <div><Counter /></div>
      </div>
    );
  }
}
