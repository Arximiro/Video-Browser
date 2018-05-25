<template>
    <input class="input" placeholder="Search Videos" @input="onInput" />
</template>




<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(e) {
      this.$emit("termChange", e.target.value);
    }
  }
};
</script>




<style lang="scss" scoped>
@import "../sass/abstracts/mixins.scss";

.input {
  height: 3rem;
  margin-left: 3rem;
  width: 60%;
  transition: all 0.5s;

  align-self: center;
  justify-self: center;

  @include respond(tab-land) {
    width: 50%;
  }

  &:focus {
    width: 75%;

    @include respond(tab-land) {
      width: 60%;
    }
  }
}
</style>
