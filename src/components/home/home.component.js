
import profilePic from '../../assets/profile-picv1.jpg';


module.exports = function(ngModule) {

  ngModule
    .component('home', {
      template: require('./home.template.html'),
      controller: [HomeController],
      controllerAs: 'ctrl'
    });

    function HomeController() {
      var ctrl = this;
      ctrl.profilePic = profilePic;
      ctrl.title = 'CPA Services for Veterinary Practices'
      ctrl.provider = {
        name: 'Stan Moshero',
        email: 'stanmosherocpa@gmail.com',
        tel: '917-554-1050',
        address1: '9465 E Ironwood Square Dr.',
        address2: 'Scottsdale, AZ 85258'
      }
      
    }

}
