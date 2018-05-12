import Vue from 'vue';
import App from './App';

new Vue({
  render: h => h(App)  // h is a function known as createElement, but is just named h for shorthand. Which derives from the term hyperscript
}).$mount('#app');

// ---Notes---
// $mount('#app') is the same as doing el: '#app' basically
// instead of using v-on:input for an event, you can just us @input. Replacing the v-on: with @  **see SearchBar.vue component**
// when declaring a function in the methods block, you can do onInput: function() {} or just onInput() {}. It's the same either way **see SearchBar.vue component**
