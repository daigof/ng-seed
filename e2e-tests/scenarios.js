'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe( 'my app', function() {

  it( 'should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get( 'index.html' );
    expect( browser.getLocationAbsUrl() ).toMatch( '/state1' );
  } );

  describe( 'view1', function() {

    beforeEach( function() {
      browser.get( '/' );
    } );

    it( 'should render view1 when user navigates to /view1', function() {
      expect( element.all( by.css( 'h1' ) ).first().getText() ).
      toMatch( /State 1/ );
    } );

  } );

  describe( 'view2', function() {

    beforeEach( function() {
      browser.get( '/#/state2' );
    } );

    it( 'should render view2 when user navigates to /view2', function() {
      expect( element.all( by.css( 'h1' ) ).first().getText() ).
      toMatch( /State 2/ );
    } );

  } );
} );
