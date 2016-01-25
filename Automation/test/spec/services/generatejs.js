'use strict';

describe('Service: generateJs', function () {

  // load the service's module
  beforeEach(module('automationApp'));

  // instantiate service
  var generateJs;
  beforeEach(inject(function (_generateJs_) {
    generateJs = _generateJs_;
  }));

  it('should do something', function () {
    expect(!!generateJs).toBe(true);
  });

});
