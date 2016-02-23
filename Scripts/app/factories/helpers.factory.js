(function () {

    function applyTemplate(template, replacements) {
        return template.replace(/{(\w+)}/g, function (e, n) {
            return undefined !== replacements[n] ? encodeURIComponent(replacements[n]) : "";
        });
    }

    var Helpers = function () {
        return {
         
            applyTemplate: applyTemplate,
			
        };
    };


    angular.module('chart.app.factories').factory('Helpers', [Helpers]);
})();