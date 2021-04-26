<template>
  <div class="notice" v-html="inner"></div>
</template>

<script>
export default {
  props: {
    inner: String,
  },
};
</script>

<style scoped lang="scss">
.notice {
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  width: 80%;
  margin: auto;
  text-align: center;
  border-radius: 0.5rem;
  background-color: rgb(101, 185, 139);
  padding: 1rem 0.7rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
}
</style>

<style lang="scss">
.notice {
  a {
    color: rgb(255, 255, 255);
  }

  a:hover,
  a:focus,
  a:active {
    color: rgba(0, 0, 0, 0.9);
  }
}
</style>
