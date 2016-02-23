(function (angular) {
    var ChartProvider = function() {
        var _url = null;
        this.setUrl = function(url) {
            _url = url;
        };
        this.$get = [
            '$http', 'Helpers', function($http, helpers) {
                return {
                    getData: function(query) {
                        return $http.jsonp(helpers.applyTemplate(_url || "", query));
                    }
                }
            }
        ];
    };

    angular.module('chart.app.providers').provider('Chart', [ChartProvider]);
})(angular);