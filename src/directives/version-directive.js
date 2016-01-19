'use strict';
module.exports =
  angular.module( 'myApp.directives' )
  .directive( 'appVersion', [ 'version', function( version ) {
    return function( scope, elm, attrs ) {
      elm.text( version );
    };
  } ] );
