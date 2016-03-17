angular.module('swole-app', [])
.controller('swoleControl', function($scope){  
  $scope.title = 'Train Hard';

  $scope.exerciseGroups = ['Chest', 'Shoulders', 'Back', 'Legs', 'Arms'];
  $scope.workouts = [];

  $scope.addWorkout = function(){
    $scope.workouts.push({
      muscleGroup: $scope.exercise.muscleGroup,
      name: $scope.exercise.name,
      date: $scope.exercise.date,
      weight: $scope.exercise.weight,
      reps: $scope.exercise.reps
    });
    $scope.exercise = {};
  }
});