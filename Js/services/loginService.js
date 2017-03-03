'use strict';

app.factory('loginService', function ($http) {

    return {
        login: function (user) {
            var $promise = $http.post('data/user.php', user);
            $promise.then(function (msg) {
                if (msge.data == 'succes')
                    console.log('succes login');
                else
                    console.log('error login');
            });
        }
    }


});