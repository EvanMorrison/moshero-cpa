
module.exports = function(ngModule) {

  ngModule
    .component('blog', {
      template: require('./blog.template.html'),
      controller: [BlogController],
      controllerAs: 'ctrl'
    })

    function BlogController() {
      const ctrl = this;
    }

}
