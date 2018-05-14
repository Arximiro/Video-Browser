<template>
    <input class="input" placeholder="Search" @input="onInput" />
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(e) {
      this.$emit('termChange', e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
  .input {
    height: 3rem;
    margin-left: 3rem;
    width: 50%;
    transition: all .5s;

    justify-self: start;
    align-self: center;

    &:focus {
      width: 75%;
    }
  }
</style>
