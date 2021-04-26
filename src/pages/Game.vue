<template>
  <div class="outer" :style="{ backgroundColor: self.team.color.faint }">
    <StatusBar :is-vertical="false" :background-color="self.team.color.solid" />
    <SliderBody />
    <OkButton text="SUBMIT" :color="self.team.color.dark" v-if="self.enabled" />
    <Notice v-else :inner="notice" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import StatusBar from "../components/StatusBar.vue";
import OkButton from "../components/OkButton.vue";
import SliderBody from "../components/SliderBody.vue";
import Notice from "../components/Notice.vue";

export default {
  name: "Game",
  components: {
    StatusBar,
    OkButton,
    SliderBody,
    Notice,
  },
  computed: {
    ...mapState("game", ["self", "enabled"]),
    backgroundColor: function () {
      if (this.inGame) {
        return "2" || this.team.color.light;
      } else {
        return "inherit";
      }
    },
  },
  data() {
    return {
      notice: `It's not your turn yet.`,
    };
  },
};
</script>

<style lang="scss" scoped>
.outer {
  display: grid;
  grid-template-rows: 9% 81% 10%;
  height: 100%;
}
</style>
