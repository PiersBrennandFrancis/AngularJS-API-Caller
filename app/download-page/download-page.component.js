
angular.
module('downloaderApp').
component('downloadPage', {
  templateUrl: 'download-page/download-page.template.html',
  controller: [ 'DownloadFactory',
  function DownloadPageController(DownloadFactory) {
    this.user = 'world';

    this.csvConfig= {
      "csvHeader": ["Genesis Sponsor ID", "EmployeeID", "First Name", "Last Name", "Email Address"],
      "filename": "help.csv"
    };
    // this.csvHeader=["Genesis Sponsor ID", "EmployeeID", "First Name", "Last Name", "Email Address"];
    // this.filename="help.csv";

    this.generateAdminMembersCsv = function () {
        return DownloadFactory.segmentMembers.query().$promise.then(function(response) {
            return response;
        });

  };
}]

});