
angular.
module('downloaderApp').
component('downloadPage', {
  templateUrl: 'download-page/download-page.template.html',
  controller: [ 'DownloadFactory',
  function DownloadPageController(DownloadFactory) {
    var self = this;

    this.user = 'world';

    this.csvConfig= {
      "csvHeader": ["Genesis Sponsor ID", "EmployeeID", "First Name", "Last Name", "Email Address"],
      "filename": "help.csv"
    };

    //Function to return promise holding members!
    this.generateAdminMembersCsv = function () {
        return DownloadFactory.getMembers(2).$promise.then(function(response) {
            return response;
        });
      };

  
    this.segments=[
      {id: 1, name: "abc"},
      {id: 2, name: "def"},
      {id: 3, name: "ghi"}
    ];



    //Will get object like {count:72}
    this.memberCount = function getMemberCount(id){
      self.countObj=DownloadFactory.getMembersCount(id);
      console.log(DownloadFactory.getMembersCount(id));
      // console.log(self.countObj)
      // return ;
    }
    
    this.segments.forEach(element => {
      console.log(element.id);
      // element.count=element.id;
      element.countPromise = DownloadFactory.getMembersCount(element.id)
      // this.memberCount(element.id);
    });

    // this.memberCount=getMemberCount;

      // console.log(this.memberCount);
      // console.log(DownloadFactory.getMembersCount(1));

      // this.giveMembersCount = function () {
      //   return DownloadFactory.getMembersCount().$promise.then(function(response) {
      //     self.count=response.count;
      //     console.log(JSON.stringify(response));
      //     console.log(response.count);
      //       return response.count;
      //   });
      // };

 


      // DownloadFactory.getMembersCount().$promise.then(function(response) {
      //   console.log(JSON.stringify(response));
      //   console.log(response.count);
      //   self.count=response.count;
        
      // });

      // console.log(this.giveMembersCount());
      // console.log(this.count)
      // console.log(typeof this.membersCount);
      // this.membersCount= this.giveMembersCount();
      // console.log("thing", this.membersCount)


}]

});