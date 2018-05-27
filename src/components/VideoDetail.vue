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
import moment from "moment";

export default {
  name: "VideoDetail",
  props: ["video"],
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.video.id.videoId}`;
    },
    published() {
      return moment(this.video.snippet.publishedAt).format("MMM Do, YYYY");
    }
  }
};
</script>




<style lang="scss" scoped>
@import "../sass/abstracts/mixins.scss";

.main {
  padding: 1rem;

  & .video {
    height: 63vh;

    @include respond(tab-port) {
      height: 40vh;
    }
  }

  & .detail {
    padding-top: 1rem;
    height: 30vh;
  }

  @include respond(tab-port) {
    font-size: 85%;
  }
}
</style>
