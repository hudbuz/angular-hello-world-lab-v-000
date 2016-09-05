function MainController($scope) {
  $scope.contact = {
    name: "Hudson Buzby",
    email: "hzb2@cornell.edu",
    phone: 7023716634
  }


}


angular
  .app('app')
  .controller('MainController', MainController)