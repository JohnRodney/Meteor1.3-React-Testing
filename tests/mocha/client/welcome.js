import Welcome from '../../../client/welcome.jsx';
const assert = require('assert');

describe('Class', () => {
  describe('method secret', () => {
    const test = new Welcome('I <3 U');
    it('should keep a secret', () => {
      assert.equal('I <3 U', test.getSecret());
    });
  });
});
