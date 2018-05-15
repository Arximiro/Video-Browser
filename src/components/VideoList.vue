<template>
  <ul class="list-group" v-if="videos.length > 0">
    <VideoListItem
      @videoSelect="onVideoSelect"
      v-for="video in videos"
      :video="video"
      :key="video.etag"
      >
      </VideoListItem>
  </ul>
</template>




<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  props: ["videos"],
  methods: {
    onVideoSelect(video) {
      this.$emit("videoSelect", video);
    }
  }
};
</script>




<style lang="scss" scoped>
</style>
