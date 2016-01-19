'use strict';

describe('myApp.version module', function() {
  beforeEach(module('myApp'));

  describe('app-version directive', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'overridden');
      });
      inject(function(version, $compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('overridden');
        expect(version).toEqual('overridden');
      });
    });
  });
});
