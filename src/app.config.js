
module.exports = function(ngModule) {  

    ngModule

    .config(['$mdThemingProvider', function($mdThemingProvider) {

        const lavenderMap = $mdThemingProvider.extendPalette('purple', {
            '400': '#6389e1',
            '200': '#adc1f0'
        })

        $mdThemingProvider.definePalette('lavender', lavenderMap)

        $mdThemingProvider.theme('default')
          .primaryPalette('lavender', {
            'default': '400',
            'hue-1': '200'
        })
    }])

    
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
      function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');


        $stateProvider
        .state('index', {
          template: require('./components/layout/layout.template.html') 
          // views: {
          //   'header@': { component: 'header'},
          //   'navbar': { component: 'navbar'},
          //   'mainContent': { component: 'home'},
          //   'sidebar': { component: 'sidebar'}
          // }
        })

        .state('layout', {
          url: '/',
          parent: 'index',
          views: { 
            'header@index': { component: 'header'},
            'hero@index': { component: 'hero' },
            'mainContent@index': { component: 'home' },
            'sidebar@index': { component: 'sidebar' }
          }
        })


        .state('home', {
          url: '',
          parent: 'layout',
          views: {
            'mainContent@index': {component: 'home'},
            'hero@index': { component: 'hero' }
          }
        })

        .state('about', {
          url: 'about',
          parent: 'layout',
          views: {
            'mainContent@index': { component: 'about' },
            'hero@index': '',
            'sidebar@index': { template: '' }
          }
        })

        .state('services', {
          url: 'services',
          parent: 'layout',
          views: {
            'mainContent@index': { component: 'servicesComponent' },
            'hero@index': ''
          }
        })
        
        .state('blog', {
          url: 'blog',
          parent: 'layout',
          views: {
            'mainContent@index': { component: 'blog' },
            'hero@index': ''
          }
        })

      }
    ])

}