module.exports = function(ngModule) {

  ngModule
    .component('servicesComponent', {
      template: require('./services.template.html'),
      controller: [ServicesController],
      controllerAs: 'ctrl'
    });

    function ServicesController() {
      const ctrl = this;
      ctrl.content= 'Stan Moshero provides a full range of tax and accounting services are available at competitive rates.'

      
      ctrl.servicesList = [
          "Financial statement preparation",
          "Outsourced controller/CFO services",
          "Veterinary bookkeeping and accounting",
          "Accounting software set-up and support – QuickBooks",
          "Incorporations",
          "Tax planning",
          "Personal financial statements",
          "Compilations and reviews",
          "Business loan assistance",
          "Budgets and financial projections",
          "Business plan development",
          "IRS problem resolution",
          "Debt restructuring",
          "Veterinary practice succession planning",
          "Mergers and acquisitions",
          "Estate planning",
          "Retirement planning for veterinarians"]
"Consult with a Veterinary CPA today! We offer a FREE initial consultation for veterinarians."

    }

}
