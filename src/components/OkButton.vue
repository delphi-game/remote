<template>
  <button :style="{ backgroundColor }" :class="{ fixed: position == 'fixed' }">
    {{ text }}
  </button>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    text: String,
    position: String,
    color: String,
  },
  computed: {
    ...mapState(["inGame", "team", "player", "upNext"]),
    backgroundColor: function () {
      if (this.inGame) {
        if (this.upNext == 0) {
          return this.color + ";";
        } else {
          return this.color + ";filter: opacity(30%);";
        }
      } else {
        return this.color;
      }
    },
  },
};
</script>

<style scoped lang="scss">
button {
  width: 100%;
  border: 0;
  color: white;
  font-size: 2.2rem;
  transition: background-color 0.1s ease-in, color 0.1s ease-in;
  cursor: pointer;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:active {
  background-color: rgb(158, 158, 158) !important;
  color: black;
}

.fixed {
  width: 100%;
  border: 0;
  color: white;
  font-size: 2.2rem;
  transition: background-color 0.1s ease-in, color 0.1s ease-in;
  cursor: pointer;
  margin: 0;
  padding: 1rem 0;

  position: fixed;
  bottom: 0;
}
</style>
