import React from 'react';

export default class ExampleComponent extends React.Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this.state = { count: 0 };
  }

  getCount() {
    return this.state.count;
  }

  _handleClick() {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  render() {
    return (
      <div>
        <div>
          <p>
            Hello, world.
            <span className="state-count">{ this.state.count }</span>
            times.
          </p>
        </div>
        <button className="count-up" onClick={this._handleClick}>click me</button>
      </div>
    );
  }
}
