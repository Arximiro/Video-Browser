<template>
  <div class="app">
    <h1 class="ct">YouTube API</h1>
    <SearchBar class="sb" @termChange="onTermChange"></SearchBar>
    <VideoList class="vl" @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    <VideoDetail class="vd" :video="selectedVideo"></VideoDetail>
    <img src="./img/vuejs.png" alt="vueJS Logo" class="icon" v-if="selectedVideo">
    <img src="./img/yt.png" alt="youtube logo" class="yt-logo" v-if="videos.length > 0 && !selectedVideo">
  </div>
</template>




<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = "AIzaSyC5KS5ytOBbDakTfilVoAdD1EDrX7pW9f0";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return { videos: [], selectedVideo: null };
  },
  methods: {
    async onTermChange(searchTerm) {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        }
      );
      console.log(response);
      this.videos = response.data.items;
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    }
  }
};
</script>




<style lang="scss" scoped>
@import "./sass/abstracts/mixins.scss";

.app {
  border: 2rem solid #ddd;
  border-radius: 1rem;
  margin: 3rem;

  display: grid;
  grid-template-rows: 10vh min-content min-content;
  grid-template-columns: 5fr 3fr;

  @include respond(tab-land) {
    grid-template-rows: 10vh repeat(4, max-content);
    grid-template-columns: 100%;
  }

  @include respond(tab-port) {
    grid-template-rows: 10vh 10vh repeat(4, max-content);
  }

  @include respond(phone) {
    border: 2px solid black;
  }

  & .ct {
    padding-left: 1rem;

    align-self: center;

    grid-row: 1/2;
    grid-column: 1/2;

    @include respond(tab-land) {
      grid-column: 1;
    }

    @include respond(tab-port) {
      padding: 0;

      justify-self: center;
    }

    @include respond(small-phone) {
      font-size: 1.5rem;
    }
  }

  & .sb {
    align-self: center;
    justify-self: center;
    grid-row: 1/2;
    grid-column: 2/3;

    @include respond(tab-land) {
      margin-right: 1rem;

      grid-column: 1;
      justify-self: end;
    }

    @include respond(tab-port) {
      margin: 0;

      grid-row: 2;
      grid-column: 1;
      justify-self: center;
    }

    @include respond(small-phone) {
      margin-bottom: 0.5rem;
    }
  }

  & .vl {
    margin: 1rem;

    grid-row: 2/3;
    grid-column: 2/3;

    @include respond(tab-land) {
      grid-column: 1;
    }

    @include respond(tab-port) {
      grid-row: 3/4;
    }
  }

  & .vd {
    grid-row: 2/4;
    grid-column: 1/2;

    @include respond(tab-land) {
      grid-row: 3/5;
      grid-column: 1;
    }

    @include respond(tab-port) {
      grid-row: 4/6;
    }
  }

  & .icon {
    grid-row: 3/4;
    grid-column: 2/3;
    justify-self: center;

    @include respond(tab-land) {
      padding-top: 3rem;

      grid-row: 5/6;
      grid-column: 1;
    }

    @include respond(tab-port) {
      grid-row: 6/7;
    }

    @include respond(phone) {
      padding-top: 1rem;
      height: 70%;
      align-self: center;
    }

    @include respond(small-phone) {
      display: none;
    }
  }

  & .yt-logo {
    animation: pulse 2s infinite;

    grid-row: 2/3;
    grid-column: 1/2;
    justify-self: center;

    @include respond(tab-land) {
      grid-row: 3/4;
      grid-column: 1;
    }

    @include respond(tab-port) {
      height: 80%;

      align-self: center;
      grid-row: 4/5;
    }

    @include respond(phone) {
      height: 45%;
    }

    @include respond(small-phone) {
      display: none;
    }

    @keyframes pulse {
      from {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }

      50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05);
      }

      to {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
  }
}
</style>
