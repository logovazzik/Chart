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
            plotOptions: {
                series: {
                    marker: {
                        enabled: true
                    }
                }
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

        this.getData = function (dateRange) {
            chartService.getData({seriesCount: 2}, dateRange).then(function (data) {
                $rootScope.$broadcast("chart.data.changed", { data: data });
            });
        };

       
        this.init = function () {
            $rootScope.$on("date.range.changed", function (e, dateRange) {
                self.getData(dateRange);
            });
        };



        this.init();

    };
    angular.module("chart.app.controllers").controller("ChartController", ["$rootScope", "ChartService", "$scope", ChartController]);
})(angular);