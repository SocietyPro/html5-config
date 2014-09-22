var japi = Cambrian.JAPI();
angular.module("configApp", ['ngMaterial'])
.controller("configAppCtrl", function ($scope, $rootScope, $element) {
  //$scope.audioEnabled
  var initAudioEnabled = japi.config.audioEnabled;
  $scope.config = {
    audioEnabled: initAudioEnabled,
    devAppDir: "C:\Users\orbital\.Cambrian\Apps",
  }
  console.log('initial config', $scope.config);
  $scope.setAudioEnabled = function(){
    if($scope.config.audioEnabled !== true 
      && $scope.config.audioEnabled !== false){
      throw('$scope.setAudioMute needs a true or false argument');
    }
    console.log('Current japi audio', japi.config.audioEnabled);
    console.log('Current scope audio', $scope.config.audioEnabled);
    japi.config.audioEnabled = $scope.config.audioEnabled;
  }
  $scope.setDevAppsDir = function(dir){
    japi.config.developerAppsDirectory = dir;
  }
});
