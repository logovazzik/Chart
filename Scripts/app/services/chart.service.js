(function(angular) {
    var ChartService = function (chartProvider) {
        this.data = [];

        this.getData = function(q) {
            return chartProvider.getData(q).then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; ++i) {
                    data[i].sort(function(a,b) {
                        return a[0] - b[0];
                    });
                }
                return data;
            });
        }
       
    };
    angular.module("chart.app.services").service("ChartService", ["Chart", ChartService]);
})(angular);