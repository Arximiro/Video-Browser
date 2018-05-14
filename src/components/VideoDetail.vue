<template>
  <div class="main" v-if="video">
    <div class="video">
      <iframe width="100%" height="100%" :src="videoUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div class="detail">
    <h1>{{video.snippet.title}}</h1>
    <br>
    <p>{{video.snippet.description}}</p>
    <h5>Published - {{published}}</h5>
    </div>
  </div>
</template>




<script>
import moment from 'moment';

export default {
  name: "VideoDetail",
  props: ["video"],
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.video.id.videoId}`
    },
    published() {
      return moment(this.video.snippet.publishedAt).format("MMM Do, YYYY");
    }
  }
};
</script>




<style lang="scss" scoped>
  .main {
    border-radius: 4px;
    margin: 0 1rem 0 1rem;

    & .video {
      height: 63vh;
    }

    & .detail {
      padding: 1rem;
      margin-top: 2rem;
      height: 30vh;
    }
  }
</style>
