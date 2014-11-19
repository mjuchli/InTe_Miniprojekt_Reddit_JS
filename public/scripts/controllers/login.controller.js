angular.module('redditclone').controller('loginController', function($scope, Page, $location, User) {

    Page.setTitle('Login');

    $scope.login = function(credentials){

        $scope.user = new User();
        $scope.user.name = credentials.username;
        $scope.user.password = credentials.password;

        $scope.user.$login(function(res){
            $location.path('/');
        },function(error){
            console.log(error);
            $scope.error= error;
        });
    }

});