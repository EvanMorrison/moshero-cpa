const profilePic = require('../../assets/profile-picv2.jpg');


module.exports = function(ngModule) {

  ngModule
    .component('sidebar', {
      template: require('./sidebar.template.html'),
      controller: [SidebarController],
      controllerAs: 'ctrl'
    });

    function SidebarController() {
      const ctrl = this;
      ctrl.profilePic = profilePic;
      ctrl.title = 'CPA Services for Veterinary Practices'
      ctrl.provider = {
        name: 'Stan Moshero',
        email: 'stanmosherocpa@gmail.com',
        tel: '917-554-1050',
        address1: '9465 E Ironwood Square Dr.',
        address2: 'Scottsdale, AZ 85258',
        googleMapsUrl: 'https://goo.gl/maps/3RoGdZroWeH2'
      }

      ctrl.bodyText = "I can help you have a more productive and \
      fulfilling practice. Call me for a free consultation. \
      I have years of experience in accounting, bookkeeping, tax preparation and\
      planning for small business owners, with a special expertise with \
      veterinary practices."
      
    }


}