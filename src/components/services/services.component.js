(function() {

  angular.module('Services', [])
    .component('servicesComponent', {
      templateUrl: '/components/services/services.template.html',
      controller: [ServicesController]
    });

    function ServicesController() {
      const ctrl = this;
      ctrl.content= 'A full range of tax and accounting services are available from Stan at competitive rates.'
    }

})();
