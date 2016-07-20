angular.module('habilelabsApp',
    [
        'ngMaterial',
        'angular-meteor',
        'ngTouch',
        'ui.router'
    ]
)
.config(["$logProvider", "$locationProvider", function ($logProvider, $locationProvider) {
    $logProvider.debugEnabled(true);
}]);
