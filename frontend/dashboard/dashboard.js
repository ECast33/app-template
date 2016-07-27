app.controller('dashController', function  ( $http ,$scope, $rootScope, $location )
{
    if( false === $rootScope.authenticated  )
    {
        $location.path('/');

    }else if( true === $rootScope.authenticated )
    {
        $scope.user = $rootScope.current_user;
        $location.path('/dashboard' );
    }
    else 
    {
        $location.path('/');
    }

    $scope.client = {

        name: '',
        email: '',
        phone: '',
        age:   0,
        height: '',
        weight: 0

    };

    $scope.client.readAll = 1;
    
    $scope.clients = [];




        $http.post('api/clients', $scope.client ).success(

            function( data )
            {
                if( 0 === data.length )
                {
                    console.log('Nope');
                    $location.path('/');

                }
                else
                {

                    $scope.clients = data;
                  $location.path('/dashboard');

                }


            });



    
});