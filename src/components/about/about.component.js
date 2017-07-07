const profilePic = require('../../assets/profile-picv2.jpg');


module.exports = function(ngModule) {
  ngModule
      
      .component('about', {
        template: require('./about.template.html'),
        controller: [AboutController],
        controllerAs: 'ctrl'
      });

      function AboutController() {
        const ctrl = this;
        ctrl.profilePic = profilePic;
        ctrl.provider = {
        name: 'Stan Moshero',
        email: 'stanmosherocpa@gmail.com',
        tel: '917-554-1050',
        address1: '9465 E Ironwood Square Dr.',
        address2: 'Scottsdale, AZ 85258'
      }
      }

}
