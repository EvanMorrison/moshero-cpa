
module.exports = function(ngModule) {
  ngModule
    .component('navbar', {
      template: require('./navbar.template.html'),
      controller: [navbarController],
      controllerAs: 'ctrl'
    });

    function navbarController() {
      const ctrl = this;
    }

}