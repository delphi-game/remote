<template>
  <div class="outer">
    <div v-for="(set, title, i) in thinker.cards" :key="i">
      <div class="title">{{ title }}</div>
      <div class="set">
        <div
          v-for="(word, index) in set"
          :key="index"
          class="card"
          :style="{
            fontSize: wordSize(word),
            backgroundColor: i == 0 ? self.team.color.light : 'white',
          }"
          :class="{ colored: i == 0 }"
        >
          {{ word.toUpperCase() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("game", ["thinker", "self"]),
  },
  methods: {
    wordSize(word) {
      const length = word.length * -1 + 23;
      return length + "px";
    },
  },
};
</script>

<style scoped lang="scss">
.outer {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.3rem;
  margin: 0.5rem 0;
}

.set {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.7rem;
  margin: 1rem 0 1rem 0;
}

.card {
  font-size: 1rem;
  border-radius: 0.7rem;
  border: 0.27rem solid #969696;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  background-color: white;
  color: #6e6e6e;
  padding: 0.1rem 0 0 0.05rem;
}

.colored {
  color: rgb(51, 51, 51);
  text-shadow: rgb(255, 255, 255) 0rem 0 1rem;
  border-color: rgb(82, 82, 82);
}
</style>
