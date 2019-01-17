'use strict';

angular.module('downloaderApp')
.factory('DownloadFactory', ['$resource' , function ($resource) {
    // this.url= "https://api.github.com/users/piersbrennandfrancis";
    this.url= 'http://127.0.0.1:5000/segments/1/members/';
    

    return $resource(this.url, {}, {
        query: {
          method: 'GET',
          isArray: true
        }
    })
    }
]);