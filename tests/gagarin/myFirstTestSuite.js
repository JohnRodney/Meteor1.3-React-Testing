describe('My first Gagarin test suite', function () {
  var server = meteor();
  it('execute should work', function () {
    // return a promise
    return server.execute(function () {
      expect(Meteor.release).not.to.be.empty;
    });
  });
});
