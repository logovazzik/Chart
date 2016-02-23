(function (angular, jQuery) {
    var Chart = function ($rootScope) {
        return {
            scope: {
                settings: "=ngChart"
            },
            link: function (scope, $element, attrs) {
                $element = jQuery($element).highcharts(scope.settings);
                var instance = $element.highcharts();
        
                $rootScope.$on("chart.data.changed", function (e, d) {
                    var series = d.data;
                    for (var i = 0; i < series.length; ++i) {
                        instance.series[i].update({
                            data: series[i]
                        });
                    }
                  
                });
            }
        }
    }

    angular.module("chart.app.directives").directive("ngChart", ["$rootScope", Chart]);
})(angular, jQuery)