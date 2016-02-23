(function (angular) {
    var ChartController = function ($rootScope, chartService) {
        var self = this, readyForRender = false;
        this.chartSettings = {
            chart: {
                type: 'areaspline',
                plotBorderWidth: 1,
            },
            title: '',
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%d.%m',
                    week: '%d.%m',
                    month: '%m/%y',
                }
            },
            credits: {
                enabled: false
            },

            series: [
                {
                    lineWidth: 1,
                    color: '#FCAF5F',
                    fillColor: {
                        linearGradient: [0, 0, 0, 300],
                        stops: [
                            [0, '#FFE9DB'],
                            [1, window.Highcharts.Color('#FFE9DB').setOpacity(0).get('rgba')]
                        ]
                    },
                    name: 'Company A'
                },
                 {
                     lineWidth: 1,
                     color: '#FCE0A9',
                     fillColor: {
                         linearGradient: [0, 0, 0, 300],

                         stops: [
                             [0, '#FFF3C4'],
                             [1, window.Highcharts.Color('#FFF3C4').setOpacity(0).get('rgba')]
                         ]
                     },
                     name: 'Company B'
                 }
            ]
        };

        this.getData = function () {
            chartService.getData().then(function (data) {
                self.data = data;
                readyForRender = true;
                self.renderData();
            });
        };

        this.filteredData = function () {
            var result = [], current;
            for (var i = 0; i < this.data.length; ++i) {
                result.push([]);
                for (var j = 0; j < this.data[i].length; ++j) {
                    current = this.data[i][j];
                    if (current[0] >= this.dateRange.startDate && current[0] <= this.dateRange.endDate) {
                        result[i].push(current);
                    }
                }
            }
            return result;
        };

        this.renderData = function () {
            if (!readyForRender) return;
            $rootScope.$broadcast("chart.data.changed", { data: this.filteredData() });
        };
        this.dateRange = {
            startDate:null,
            endDate: null
        };

        this.init = function () {
            this.getData();

            $rootScope.$on("date.range.changed", function (e, data) {
                self.dateRange = data;
                self.renderData();
            });
        };



        this.init();

    };
    angular.module("chart.app.controllers").controller("ChartController", ["$rootScope", "ChartService", "$scope", ChartController]);
})(angular);