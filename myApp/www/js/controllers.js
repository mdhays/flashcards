angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CardsCtrl', function($scope, Cards) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.cards = Cards.all();
  $scope.remove = function(card) {
    Cards.remove(card);
  };
})

.controller('CardDetailCtrl', function($scope, $stateParams, Cards) {
  $scope.card = Cards.get($stateParams.cardId);
})

.controller('NewCardCtrl', function($scope) {
  $scope.send;
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
