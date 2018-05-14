import Vue from 'vue';
import App from './App';

new Vue({
  render: h => h(App)
}).$mount('#app');

// ---Notes---
// $mount('#app') is the same as doing el: '#app' basically
// h here is a function known as createElement, but is just named h for shorthand. Which derives from the term hyperscript. You can name it w/e, Vue knows what it is

// instead of using v-on:input for an event, you can just us @input. Replacing the v-on: with @
//**see SearchBar.vue component**

// when declaring a function in the methods block, you can do onInput: function() {} or just onInput() {}. It's the same either way
//**see SearchBar.vue component**

// you can emit an event to communicate from a child component up to a parent. For example <input @input="onInput" />
// this will watch for an input event, and when it's triggered run our custom onInput method. onInput(e) {this.$emit('termChange', e.target.value);}
// this emits an event the parent can listen for as follows. <SearchBar @termChange="onTermChange"></SearchBar>
// once the parent receives that event from the child it will run its onTermChange method.
//**see SearchBar.vue component and App.vue component**

// v-bind:videos="videos" is basically passing props down to a child. It passes the videos data of the parent to the child via a named prop called videos.
// v-bind means anytime this data changes, rerender the component that is using this and provide it with the fresh data.
// v-bind can be excluded and you can just use :videos="videos", it does the same thing
//**see App.vue component**

// when taking in props inside a child component, you create a key value pair, like props: ['videos'] naming off all the props you expect to be taking in.
// it's possible to take in props in a way that does type checking, by instead having props: {videos: Array} for example
//**see VideoList.vue component**

// adding scoped to a style tag on a component makes it to where those styles only apply to that component

// v-if is a directive you can use on a component/element to tell vue if it should render it or not. <div v-if="video"> will only render if video is a truthy value.
//**see VideoDetail.vue component**
