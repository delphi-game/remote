<template>
  <div class="list">
    <div class="title">Past Clues</div>
    <div class="row">
      <div class="round">ROUND 1</div>
      <div class="clue">“Test” - Team Yellow</div>
      <div class="clue bold">“Test” - Team Yellow</div>
    </div>
    <div class="row">
      <div class="round">ROUND 1</div>
      <div class="clue">“Test” - Team Yellow</div>
      <div class="clue bold">“Test” - Team Yellow</div>
    </div>
    <div class="row">
      <div class="round">ROUND 1</div>
      <div class="clue">“Test” - Team Yellow</div>
      <div class="clue bold">“Test” - Team Yellow</div>
    </div>
    <div class="row">
      <div class="round">ROUND 1</div>
      <div class="clue">“Test” - Team Yellow</div>
      <div class="clue bold">“Test” - Team Yellow</div>
    </div>
    <div class="row">
      <div class="round">ROUND 1</div>
      <div class="clue">“Test” - Team Yellow</div>
      <div class="clue bold">“Test” - Team Yellow</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState([]),
  },
  methods: {
    ...mapMutations([""]),
  },
};
</script>

<style scoped lang="scss">
.list {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.15rem;
  margin-bottom: 0.4rem;
}

.row {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  > div {
    margin-bottom: 0.4rem;
  }
}

.round {
  font-size: 0.75rem;
}
</style>
