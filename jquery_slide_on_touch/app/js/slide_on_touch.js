var i=0;
/*$("#element1").on("swipe",function(){
	alert("done");
	var id="/1";
	i=1;
	alert(i);


});
*/
var touchapp=angular.module("touchapp",[]);

touchapp.config(['$routeProvider',function($routeProvider)  //ROUTING
{
	$routeProvider.when('/swiperight',
	{
		templateUrl:'page0.html',
		controller:'touchscreen'
	}).
	when('/swipeleft',
	{
		templateUrl:'page1.html',
		controller:'touchscreen'
	})
}
]);	



touchapp.controller('touchscreen',['$scope','$routeParams','$location',function($scope,$location,$routeParams)
{
	alert("In controller");
	alert($routeParams.idd);
	if($routeParams.idd==2)
	{
		$scope.displayarea="swiped";
		
	}

	if($routeParams.idd==0)
	{
		$scope.displayarea="swiped";
		
	}
}]);

touchapp.directive('senseme',['$location',function($location)		//custom directive for highcharts
{
	return{
		restrict:'A',
		link:function(scope,element,attrs)
		{
			$(document).on("swiperight",function(){
				alert("In directive");
				$location.path('swiperight');
				$("#tab2").css({"background-color":"white"});
				$("#tab1").css({"background-color":"red"});
				scope.$apply();
			});

			$(document).on("swipeleft",function(){
				alert("In directive");
				$location.path('swipeleft');
				$("#tab1").css({"background-color":"white"});
				$("#tab2").css({"background-color":"red"});
				scope.$apply();
			});
		}	
	};
}]);