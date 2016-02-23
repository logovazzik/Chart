(function(angular) {
    angular.module('daterangepicker').controller('DatepickerController', ['$rootScope', '$scope',  function($rootScope, $scope) {
        var self = this;
        this.date = {
            startDate: Date.UTC(2015, 0, 1),
            endDate: new Date().valueOf()
        };


        $scope.$watch(function() { return self.date; }, function(newDate) {
            $rootScope.$broadcast('date.range.changed', newDate);
        }, false);

    }]);


})(angular)