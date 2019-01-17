'use strict';

angular.module('downloaderApp')
.factory('DownloadFactory', ['$resource' , function ($resource) {
    // this.url= "https://api.github.com/users/piersbrennandfrancis";
    this.urlMembers= 'http://127.0.0.1:5000/segments/1/members';
    this.urlMembersCount= 'http://127.0.0.1:5000/segments/1/members/count';

    var resources ={
        members: $resource(this.urlMembers, {}, {
            query: {
              method: 'GET',
              isArray: true
            }
        }),
        memberCount: $resource(this.urlMembersCount, {}, {
            get: {
              method: 'GET',
            }
        })
    };

    return {
        getMembers: function() {
            return resources.members.query();
        },
        getMembersCount: function() {
            return resources.memberCount.get();
        }

    }


    }
]);