<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList :videos="videos"></VideoList>
  </div>
</template>


<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyC5KS5ytOBbDakTfilVoAdD1EDrX7pW9f0';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList
  },
  data() {
    return { videos: [] };
  },
  methods: {
    async onTermChange(searchTerm) {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      });
      this.videos = response.data.items;
    }
  }
};
</script>
