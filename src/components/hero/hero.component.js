


module.exports = function(ngModule) {

  ngModule
    .component('hero', {
      template: require('./hero.template.html'),
      controller: [HeroController],
      controllerAs: 'ctrl'
    });

    function HeroController() {
      var ctrl = this;
     
    }

}
