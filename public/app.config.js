(function() {

  angular
    .module('MTWApp')
    
    .config(['$mdThemingProvider', function($mdThemingProvider) {

        const lavenderMap = $mdThemingProvider.extendPalette('purple', {
            '400': '#6389e1',
            'hue-1': '#adc1f0'
        })

        $mdThemingProvider.definePalette('lavender', lavenderMap)

        $mdThemingProvider.theme('default')
          .primaryPalette('lavender', {
            'default': '400'
        })
    }])

    
    .config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);


        $routeProvider
        .when('/', {
          template: '<home-component></home-component>'
        })
        .when('/about', {
          template: '<about-component></about-component>'
        })
        .when('/services', {
          template: '<services-component></services-component>'
        })
        .when('/appointments', {
          template: '<scheduling-component></scheduling-component>'
        })
        .otherwise('/');

      }
    ])

})();