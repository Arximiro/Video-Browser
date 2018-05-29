<template>
  <li class="list-group-item media" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailUrl" alt="video thumbnail">
    <div class="media-body">
    {{ video.snippet.title }}
    </div>
  </li>
</template>




<script>
export default {
  name: "VideoListItem",
  props: ["video"],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
    }
  }
};
</script>




<style lang="scss" scoped>
@import "../sass/abstracts/mixins.scss";

li {
  cursor: pointer;

  display: flex;

  @include respond(phone) {
    flex-direction: column;
    align-items: center;
  }

  & div {
    @include respond(phone) {
      padding-top: .5rem;
      font-size: 85%;
    }
  }

  & img {
    @include respond(small-phone) {
      display: none;
    }
  }
}

li:hover {
  background-color: #eee;
}
</style>
