


module.exports = function(ngModule) {

  ngModule
    .component('home', {
      template: require('./home.template.html'),
      controller: [HomeController],
      controllerAs: 'ctrl'
    });

    function HomeController() {
      var ctrl = this;
     
    }

}
