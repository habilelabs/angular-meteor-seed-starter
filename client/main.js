angular.module('habilelabsApp')
    .controller('AppCtrl', function($scope) {
        $scope.imagePath = 'img/washedout.png';
    });

function onReady() {
    angular.bootstrap(document, ['habilelabsApp'], {
        strictDi: true
    });
}
if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
} else
    angular.element(document).ready(onReady);


