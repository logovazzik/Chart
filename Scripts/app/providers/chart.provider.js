(function () {
    var ChartProvider = function () {
        var 
            _url = null;
        this.setUrl = function (url) {
            _url = url;
        };
      
        this.$get = ['$http', 'Helpers', function ($http, helpers) {
            return {
                getData: function (query) {

                    var url = helpers.applyTemplate(_url || "", query);
                       
                    return $http.jsonp(url);
                }
            }
        }];

    };

    angular.module('chart.app.providers').provider('Chart', [ChartProvider]);
})();