angular.module('swole-app', [])
.controller('swoleControl', function($scope){  
  $scope.title = 'Train Hard';

  $scope.exerciseGroups = ['Chest', 'Shoulders', 'Back', 'Legs', 'Arms'];
  $scope.workouts = [];
});