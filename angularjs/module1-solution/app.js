(function () {
	'use strict';
	angular.module('LunchChecker', [])
	.controller('LunchCheckerController', function($scope){
		$scope.lunchoptions = "list comma separated dishes you usually have for lunch";
		$scope.LunchOrderStatus = "";
		$scope.LunchOrderColor="green";

		$scope.CheckOrder=function () {
			var lunchCt = countOrders($scope.lunchoptions);
			if (lunchCt == 0) {
				$scope.LunchOrderStatus = "Please enter data first";
			} else if (lunchCt > 3) {
				$scope.LunchOrderStatus = "Too much!";
			} else {
				$scope.LunchOrderStatus = "Enjoy!";
			}
			
		}
	});

	function countOrders(string) {
		var totalOptions = 0;
		var options = string.split(",");
		for (var i = 0; i < options.length; i++) {
			if (options[i].trim()) {
				++totalOptions;
			}
		}
		return totalOptions;
	}

})();
