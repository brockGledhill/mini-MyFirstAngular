angular.module('friendsList')

.controller('mainCtrl', function($scope){
  $scope.name = 'Brock';
  $scope.friends = [
    'Emma',
    'Moose',
    'Coco',
    'Dano'
  ];
});
