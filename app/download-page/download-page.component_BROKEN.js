
angular.
  module('downloaderApp').
  component('downloadPage', {
    templateUrl: 'download-page/download-page.template.html',
    controller: [ '$http', '$q',
    function DownloadPageController($http, $q) {
      this.user = 'world';
      var self = this;


	    this.filename = "test.csv";
	    // this.getArray = [{a: 1, b:2}, {a:3, b:4}];

      this.header = ["HEADER1", "HEADER2"];

      // $http.get('http://127.0.0.1:5000/').then(function(response) {
      //   // console.log(response.data)
      //   self.gibDataPls = response.data;
      // });

      this.getArray = function () {
        var deferred = $q.defer();
    
        $http.get('http://127.0.0.1:5000/')
            .then(function(response) {
               deferred.resolve(response);
            });
        console.log("Promise", deferred.promise)
        return deferred.promise;
    };


      // function pullJson(){
      //   console.log("CALLING DATA");
      //   promiseMe= $http({
      //     method: 'GET',
      //     url: 'http://127.0.0.1:5000/'
      //   });
      //   return promiseMe;
      // };

      // myPromise=pullJson();
      // myPromise.then(function successCallback(response) {
      //    self.gibDataPls=response.data;
      // }, function errorCallback(response) {
      //     console.log("We've had an error!")
      //     self.gibDataPls="ERROR";
      // });

      // console.log("this.gibDataPls");
      // console.log(self.gibDataPls);

      // this.getArray = this.gibDataPls;
      // console.log("this.getArray");
      // console.log(this.getArray);

      // this.getJson = function() {
      //   $http({
      //     method: 'GET',
      //     url: 'http://127.0.0.1:5000/'
      //   }).then((response) => {
      //     console.log("recieved data")
      //     console.log(response.data);
      //     if(typeof response == 'undefined' || response == null || response == ""){
      //       console.log("Oops");
      //       return
      //     }
      //   return JSON.stringify(response.data);   
      //   });
      // }


    }
  ]
  });