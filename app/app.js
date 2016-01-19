/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);

/***/ },
/* 1 */
/***/ function(module, exports) {

	angular.module( 'myApp', [ 'ui.router', 'myApp.services', 'myApp.directives', 'myApp.filters' ] )
	  .config( function( $stateProvider, $urlRouterProvider ) {
	    //
	    // For any unmatched url, redirect to /state1
	    $urlRouterProvider.otherwise( '/state1' );
	    //
	    // Now set up the states
	    $stateProvider
	      .state( 'state1', {
	        url: '/state1',
	        templateUrl: 'templates/state1.html'
	      } )
	      .state( 'state1.list', {
	        url: '/list',
	        templateUrl: 'templates/state1.list.html',
	        controller: function( $scope ) {
	          $scope.items = [ 'A', 'List', 'Of', 'Items' ];
	        }
	      } )
	      .state( 'state2', {
	        url: '/state2',
	        templateUrl: 'templates/state2.html'
	      } )
	      .state( 'state2.list', {
	        url: '/list',
	        templateUrl: 'templates/state2.list.html',
	        controller: function( $scope, version ) {
	          $scope.things = [ 'A', 'Set', 'Of', 'Things' ];
	          $scope.version = version;
	        }
	      } );
	  } );


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = angular.module('myApp.services', []);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = angular.module('myApp.services').value('version', '2.1');

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = angular.module('myApp.directives', ['myApp.services']);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = angular.module('myApp.directives').directive('appVersion', ['version', function (version) {
	  return function (scope, elm, attrs) {
	    elm.text(version);
	  };
	}]);

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = angular.module('myApp.filters', ['myApp.services']);

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = angular.module('myApp.filters').filter('interpolate', ['version', function (version) {
	  return function (text) {
	    return String(text).replace(/\%VERSION\%/mg, version);
	  };
	}]);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODA4NjhjYjI3ODhjOTIwYTgyMjgiLCJ3ZWJwYWNrOi8vL0M6L2Rldi93cy9uZy1zZWVkL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy9DOi9kZXYvd3Mvbmctc2VlZC9zcmMvc2VydmljZXMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L2Rldi93cy9uZy1zZWVkL3NyYy9zZXJ2aWNlcy92ZXJzaW9uLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL0M6L2Rldi93cy9uZy1zZWVkL3NyYy9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L2Rldi93cy9uZy1zZWVkL3NyYy9kaXJlY3RpdmVzL3ZlcnNpb24tZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy9DOi9kZXYvd3Mvbmctc2VlZC9zcmMvZmlsdGVycy9maWx0ZXJzLmpzIiwid2VicGFjazovLy9DOi9kZXYvd3Mvbmctc2VlZC9zcmMvZmlsdGVycy9pbnRlcnBvbGF0ZS1maWx0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxvQkFBTyxDQUFDLENBQU8sQ0FBQyxDQUFDO0FBQ2pCLG9CQUFPLENBQUMsQ0FBcUIsQ0FBQyxDQUFDO0FBQy9CLG9CQUFPLENBQUMsQ0FBNEIsQ0FBQyxDQUFDO0FBQ3RDLG9CQUFPLENBQUMsQ0FBeUIsQ0FBQyxDQUFDO0FBQ25DLG9CQUFPLENBQUMsQ0FBZ0MsQ0FBQyxDQUFDO0FBQzFDLG9CQUFPLENBQUMsQ0FBbUIsQ0FBQyxDQUFDO0FBQzdCLG9CQUFPLENBQUMsQ0FBOEIsQ0FBQyxDOzs7Ozs7QUNOdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLElBQUc7Ozs7Ozs7QUMvQkgsYUFBWSxDQUFDOztBQUNiLE9BQU0sQ0FBQyxPQUFPLEdBQ1osT0FBTyxDQUFDLE1BQU0sQ0FBRSxnQkFBZ0IsRUFBRSxFQUFFLENBQUUsQzs7Ozs7O0FDRnhDLGFBQVksQ0FBQzs7QUFDYixPQUFNLENBQUMsT0FBTyxHQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUUsZ0JBQWdCLENBQUUsQ0FDakMsS0FBSyxDQUFFLFNBQVMsRUFBRSxLQUFLLENBQUUsQzs7Ozs7O0FDSDVCLGFBQVksQ0FBQzs7QUFDYixPQUFNLENBQUMsT0FBTyxHQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUUsa0JBQWtCLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRSxDQUFFLEM7Ozs7OztBQ0Y1RCxhQUFZLENBQUM7O0FBQ2IsT0FBTSxDQUFDLE9BQU8sR0FDWixPQUFPLENBQUMsTUFBTSxDQUFFLGtCQUFrQixDQUFFLENBQ25DLFNBQVMsQ0FBRSxZQUFZLEVBQUUsQ0FBRSxTQUFTLEVBQUUsVUFBVSxPQUFPLEVBQUc7QUFDekQsVUFBTyxVQUFVLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFHO0FBQ25DLFFBQUcsQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFFLENBQUM7SUFDckIsQ0FBQztFQUNILENBQUUsQ0FBRSxDOzs7Ozs7QUNQUCxhQUFZLENBQUM7O0FBQ2IsT0FBTSxDQUFDLE9BQU8sR0FDWixPQUFPLENBQUMsTUFBTSxDQUFFLGVBQWUsRUFBRSxDQUFFLGdCQUFnQixDQUFFLENBQUUsQzs7Ozs7O0FDRnpELGFBQVksQ0FBQzs7QUFDYixPQUFNLENBQUMsT0FBTyxHQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUUsZUFBZSxDQUFFLENBQ2hDLE1BQU0sQ0FBRSxhQUFhLEVBQUUsQ0FBRSxTQUFTLEVBQUUsVUFBVSxPQUFPLEVBQUc7QUFDdkQsVUFBTyxVQUFVLElBQUksRUFBRztBQUN0QixZQUFPLE1BQU0sQ0FBRSxJQUFJLENBQUUsQ0FBQyxPQUFPLENBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBRSxDQUFDO0lBQzNELENBQUM7RUFDSCxDQUFFLENBQUUsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDgwODY4Y2IyNzg4YzkyMGE4MjI4XG4gKiovIiwicmVxdWlyZSgnLi9hcHAnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvc2VydmljZXMnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvdmVyc2lvbi1zZXJ2aWNlJyk7XG5yZXF1aXJlKCcuL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcycpO1xucmVxdWlyZSgnLi9kaXJlY3RpdmVzL3ZlcnNpb24tZGlyZWN0aXZlJyk7XG5yZXF1aXJlKCcuL2ZpbHRlcnMvZmlsdGVycycpO1xucmVxdWlyZSgnLi9maWx0ZXJzL2ludGVycG9sYXRlLWZpbHRlcicpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZGV2L3dzL25nLXNlZWQvc3JjL2VudHJ5LmpzXG4gKiovIiwiYW5ndWxhci5tb2R1bGUoICdteUFwcCcsIFsgJ3VpLnJvdXRlcicsICdteUFwcC5zZXJ2aWNlcycsICdteUFwcC5kaXJlY3RpdmVzJywgJ215QXBwLmZpbHRlcnMnIF0gKVxuICAuY29uZmlnKCBmdW5jdGlvbiggJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciApIHtcbiAgICAvL1xuICAgIC8vIEZvciBhbnkgdW5tYXRjaGVkIHVybCwgcmVkaXJlY3QgdG8gL3N0YXRlMVxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoICcvc3RhdGUxJyApO1xuICAgIC8vXG4gICAgLy8gTm93IHNldCB1cCB0aGUgc3RhdGVzXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSggJ3N0YXRlMScsIHtcbiAgICAgICAgdXJsOiAnL3N0YXRlMScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3N0YXRlMS5odG1sJ1xuICAgICAgfSApXG4gICAgICAuc3RhdGUoICdzdGF0ZTEubGlzdCcsIHtcbiAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zdGF0ZTEubGlzdC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oICRzY29wZSApIHtcbiAgICAgICAgICAkc2NvcGUuaXRlbXMgPSBbICdBJywgJ0xpc3QnLCAnT2YnLCAnSXRlbXMnIF07XG4gICAgICAgIH1cbiAgICAgIH0gKVxuICAgICAgLnN0YXRlKCAnc3RhdGUyJywge1xuICAgICAgICB1cmw6ICcvc3RhdGUyJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvc3RhdGUyLmh0bWwnXG4gICAgICB9IClcbiAgICAgIC5zdGF0ZSggJ3N0YXRlMi5saXN0Jywge1xuICAgICAgICB1cmw6ICcvbGlzdCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3N0YXRlMi5saXN0Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiggJHNjb3BlLCB2ZXJzaW9uICkge1xuICAgICAgICAgICRzY29wZS50aGluZ3MgPSBbICdBJywgJ1NldCcsICdPZicsICdUaGluZ3MnIF07XG4gICAgICAgICAgJHNjb3BlLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICB9XG4gICAgICB9ICk7XG4gIH0gKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYXBwLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPVxuICBhbmd1bGFyLm1vZHVsZSggJ215QXBwLnNlcnZpY2VzJywgW10gKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2Rldi93cy9uZy1zZWVkL3NyYy9zZXJ2aWNlcy9zZXJ2aWNlcy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID1cbiAgYW5ndWxhci5tb2R1bGUoICdteUFwcC5zZXJ2aWNlcycgKVxuICAudmFsdWUoICd2ZXJzaW9uJywgJzIuMScgKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2Rldi93cy9uZy1zZWVkL3NyYy9zZXJ2aWNlcy92ZXJzaW9uLXNlcnZpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9XG4gIGFuZ3VsYXIubW9kdWxlKCAnbXlBcHAuZGlyZWN0aXZlcycsIFsgJ215QXBwLnNlcnZpY2VzJyBdICk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9kZXYvd3Mvbmctc2VlZC9zcmMvZGlyZWN0aXZlcy9kaXJlY3RpdmVzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPVxuICBhbmd1bGFyLm1vZHVsZSggJ215QXBwLmRpcmVjdGl2ZXMnIClcbiAgLmRpcmVjdGl2ZSggJ2FwcFZlcnNpb24nLCBbICd2ZXJzaW9uJywgZnVuY3Rpb24oIHZlcnNpb24gKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCBzY29wZSwgZWxtLCBhdHRycyApIHtcbiAgICAgIGVsbS50ZXh0KCB2ZXJzaW9uICk7XG4gICAgfTtcbiAgfSBdICk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9kZXYvd3Mvbmctc2VlZC9zcmMvZGlyZWN0aXZlcy92ZXJzaW9uLWRpcmVjdGl2ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID1cbiAgYW5ndWxhci5tb2R1bGUoICdteUFwcC5maWx0ZXJzJywgWyAnbXlBcHAuc2VydmljZXMnIF0gKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2Rldi93cy9uZy1zZWVkL3NyYy9maWx0ZXJzL2ZpbHRlcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9XG4gIGFuZ3VsYXIubW9kdWxlKCAnbXlBcHAuZmlsdGVycycgKVxuICAuZmlsdGVyKCAnaW50ZXJwb2xhdGUnLCBbICd2ZXJzaW9uJywgZnVuY3Rpb24oIHZlcnNpb24gKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCB0ZXh0ICkge1xuICAgICAgcmV0dXJuIFN0cmluZyggdGV4dCApLnJlcGxhY2UoIC9cXCVWRVJTSU9OXFwlL21nLCB2ZXJzaW9uICk7XG4gICAgfTtcbiAgfSBdICk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9kZXYvd3Mvbmctc2VlZC9zcmMvZmlsdGVycy9pbnRlcnBvbGF0ZS1maWx0ZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9