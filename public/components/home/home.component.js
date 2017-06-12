(function() {

  angular.module('Home', [])
  .component('homeComponent', {
    templateUrl: '/components/home/home.template.html',
    controller: HomeController
  });

  function HomeController() {
    var ctrl = this;
    ctrl.title = 'CPA Services for Veterinary Practices'
    ctrl.provider = {
      name: 'Stan Moshero',
      email: 'stanmosherocpa@gmail.com',
      tel: '917-554-1050',
      address1: '9465 E Ironwood Square Dr.',
      address2: 'Scottsdale, AZ 85258'
    }
    
  }

})()
