import './style.css';
import './animate.css';

const app = angular.module('StanApp', [
                            'ngMaterial',
                            'ui.router'
                            // 'Home',
                            // 'About',
                            // 'Services',
                            // 'Scheduling'
                          ])

require('./app.config')(app);

require('./components/header/header.component')(app);

require('./components/navbar/navbar.component')(app);

require('./components/hero/hero.component')(app);

require('./components/home/home.component')(app);

require('./components/sidebar/sidebar.component')(app);

require('./components/services/services.component')(app);

require('./components/about/about.component')(app);

require('./components/blog/blog.component')(app);