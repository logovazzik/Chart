(function(angular) {
    var ChartService = function(chartProvider, $q) {
        this.data = null;

        var self = this;

        this.filteredData = function(dateRange) {
            var result = [], current;
            for (var i = 0; i < this.data.length; ++i) {
                result.push([]);
                for (var j = 0; j < this.data[i].length; ++j) {
                    current = this.data[i][j];
                    if (current[0] >= dateRange.startDate && current[0] <= dateRange.endDate) {
                        result[i].push(current);
                    }
                }
            }
            return result;
        };

        this.getData = function(query, dateRange) {
            var defered = $q.defer();
            if (this.data) {
                defered.resolve(this.filteredData(dateRange));
            } else {
                chartProvider.getData(query).then(function(response) {
                    if (!self.data) {
                        var data = response.data;
                        for (var i = 0; i < data.length; ++i) {
                            data[i].sort(function(a, b) {
                                return a[0] - b[0];
                            });
                        }
                        self.data = data;
                    }
                    defered.resolve(self.filteredData(dateRange));
                });
            }
            return defered.promise;
        }
    };
    angular.module("chart.app.services").service("ChartService", ["Chart", "$q", ChartService]);
})(angular);