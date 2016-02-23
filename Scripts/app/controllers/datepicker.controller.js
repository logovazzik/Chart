(function(angular) {
    angular.module('daterangepicker').controller('DatepickerController', ['$rootScope', '$scope',  function($rootScope, $scope) {
        var self = this;
      
        this.datePickerSettings = {
            date: {
                startDate: Date.UTC(2015, 0, 1),
                endDate: new Date().valueOf(),
                max: new Date().valueOf()
            },
            opens: "left"
        };
        

        $scope.$watch(function () { return self.datePickerSettings.date; }, function (newDate) {
            $rootScope.$broadcast('date.range.changed', newDate);
        }, false);

    }]);


})(angular)