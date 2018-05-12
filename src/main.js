import Vue from 'vue';
import App from './App';

new Vue({
  render: vvv => vvv(App)  // h is a function known as createElement, but is just named h for shorthand. Which derives from the term hyperscript
}).$mount('#app');
