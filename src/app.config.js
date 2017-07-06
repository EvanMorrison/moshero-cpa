
module.exports = function(ngModule) {  

    ngModule

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

    
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
      function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');


        $stateProvider
        .state('index', {
          url: '/',
          views: {
            'navbar': {component: 'navbar'},
            'main': {component: 'home'}
          }
        })


        // .state('/about', {
        //   template: '<about-component></about-component>'
        // })
        // .state('/services', {
        //   template: '<services-component></services-component>'
        // })
        // .state('/appointments', {
        //   template: '<scheduling-component></scheduling-component>'
        // })

      }
    ])

}