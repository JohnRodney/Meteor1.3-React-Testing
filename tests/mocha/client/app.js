import App from '../../../client/app.jsx';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;
const assert = require('assert');

describe('React Component', () => {
  describe('App Container', () => {
    it('it should render', () => {
      const app = TestUtils.renderIntoDocument(<App />);
      assert.ok(app);
    });
  });
});
