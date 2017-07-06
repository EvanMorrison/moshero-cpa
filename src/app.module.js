import './style.css';

const app = angular.module('StanApp', [
                            'ngMaterial',
                            'ui.router'
                            // 'Home',
                            // 'About',
                            // 'Services',
                            // 'Scheduling'
                          ])

require('./app.config')(app);

require('./components/navbar/navbar.component')(app);

require('./components/home/home.component')(app);