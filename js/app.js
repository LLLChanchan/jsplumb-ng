var myApp = angular.module('plumbApp', ['plumbApp.controllers', 'plumbApp.directives', 'ui.bootstrap', 'ui.slider']);

jsPlumb.ready(function(){
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['plumbApp']);
    });

});