(function(angular) {
    (function() {
        angular.module('chart.app.services', []);
        angular.module('chart.app.factories', []);
        angular.module('chart.app.controllers', []);
        angular.module('chart.app.directives', []);
        angular.module('chart.app.providers', []);

        angular.module('daterangepicker', [])
            .constant('dateRangePickerConfig', {
                clearLabel: 'Clear',
                locale: {
                    separator: ' - ',
                    format: 'YYYY-MM-DD'
                }
            });


        angular.module('chart.app', [
            'chart.app.providers',
            'chart.app.controllers',
            'chart.app.services',
            'chart.app.directives',
            'chart.app.factories',
            'daterangepicker'
        ])
        .config(['ChartProvider', function (chartProvider) {
            chartProvider.setUrl('http://api.mynameisvova.ru/chart/getdata?callback=JSON_CALLBACK&seriesCount={seriesCount}');
        }]);;
    })();
})(angular);