
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
    // this.csvHeader=["Genesis Sponsor ID", "EmployeeID", "First Name", "Last Name", "Email Address"];
    // this.filename="help.csv";

    this.generateAdminMembersCsv = function () {
        return DownloadFactory.getMembers().$promise.then(function(response) {
            return response;
        });
      };

    
      this.memberCount=DownloadFactory.getMembersCount();
      console.log(this.memberCount);
      console.log(DownloadFactory.getMembersCount());

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