'use strict';

describe('myApp.services module', function() {
  beforeEach(module('myApp.services'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('2.1');
    }));
  });
});
