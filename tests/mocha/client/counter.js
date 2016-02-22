import Counter from '../../../client/counter.jsx';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;
const assert = require('assert');

describe('React Component', () => {
  describe('Keeps count of how many times a button is clicked', () => {
    it('its default state should be 0', () => {
      const counter = TestUtils.renderIntoDocument(<Counter />);
      assert.equal(0, Number(counter.getCount()));
    });

    it('its count should go up one time per click', () => {
      const counter = TestUtils.renderIntoDocument(<Counter />);
      const counterButton = TestUtils.findRenderedDOMComponentWithClass(counter, 'count-up');

      [1, 2, 3, 4, 5].forEach((number) => {
        TestUtils.Simulate.click(counterButton);
        assert.equal(number, Number(counter.getCount()));
      });
    });
  });
});
