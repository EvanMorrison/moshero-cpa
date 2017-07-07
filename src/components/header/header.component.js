
module.exports = function(ngModule) {
  ngModule
    .component('header', {
      template: require('./header.template.html'),
      controller: [HeaderController],
      controllerAs: 'ctrl'
    })

    function HeaderController () {
      const ctrl = this;
      
    }
}