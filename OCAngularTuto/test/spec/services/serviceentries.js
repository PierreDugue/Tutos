'use strict';

describe('Service: serviceEntries', function () {

  // load the service's module
  beforeEach(module('ocangularTutoApp'));

  // instantiate service
  var serviceEntries;
  beforeEach(inject(function (_serviceEntries_) {
    serviceEntries = _serviceEntries_;
  }));

  it('should do something', function () {
    expect(!!serviceEntries).toBe(true);
  });

});
