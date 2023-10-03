const { createApp } = require('vue');
import App from './App.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faUser, faBolt} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUser, faBolt)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
