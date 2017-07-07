
module.exports = function(ngModule) {
  ngModule
    .component('navbar', {
      template: require('./navbar.template.html'),
      controller: [navbarController],
      controllerAs: 'ctrl'
    });

    function navbarController() {
          const ctrl = this;

          ctrl.socialLinks = [
              { name: 'googlePlus',
                faClass: 'fa-google-plus',
                url: 'https://plus.google.com/110492261449145250854'
              },
              {
                name: 'facebook',
                faClass: 'fa-facebook',
                url: 'https://www.facebook.com/stanislav.moshero'
              },
              {
                name: 'twitter',
                faClass: 'fa-twitter',
                url: '#'
              },
              {
                name: 'linkedin',
                faClass: 'fa-linkedin',
                url: 'https://www.linkedin.com/in/stanislav-moshero-bb6141110'
              }
          ]

    }

}