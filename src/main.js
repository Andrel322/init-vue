import Vue from 'vue';
import appComponent from './components/app.component';
import './filters';
import store from './store';

require("style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css");
require('bootstrap');

new Vue({
    el: '#app',
    components: {
        'app': appComponent
    },
    store,
})