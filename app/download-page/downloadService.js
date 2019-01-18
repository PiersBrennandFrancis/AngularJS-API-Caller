'use strict';

angular.module('downloaderApp')
.factory('DownloadFactory', ['$resource' , function ($resource) {
    // this.url= "https://api.github.com/users/piersbrennandfrancis";
    // this.urlMembers= 'http://127.0.0.1:5000/segments/1/members';
    // this.urlMembersCount= 'http://127.0.0.1:5000/segments/1/members/count';

    var resources ={
        members: $resource('http://127.0.0.1:5000/segments/:segmentId/members', {}, {
            query: {
              method: 'GET',
              isArray: true
            }
        }),
        memberCount: $resource('http://127.0.0.1:5000/segments/:segmentId/members/count', {}, {
            get: {
              method: 'GET',
            }
        })
    };

    return {
        getMembers: function(segmentId) {
            return resources.members.query({ segmentId: segmentId });
        },
        getMembersCount: function(segmentId) {
            return resources.memberCount.get({ segmentId: segmentId });
        }

    }


    }
]);