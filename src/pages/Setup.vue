<template>
  <div class="page">
    <Title />
    <h5>Room Setup</h5>
    <div>
      <RoomCode /><TeamsSelector /><CardTypeSelector /><BoardSizeSelector /><DeckSelector />
    </div>
    <OkButton text="SETUP" position="fixed" color="rgb(98, 98, 98)" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import OkButton from "../components/OkButton.vue";
import Title from "../components/Title.vue";

import RoomCode from "../components/form/RoomCode.vue";
import TeamsSelector from "../components/form/TeamsSelector.vue";
import CardTypeSelector from "../components/form/CardTypeSelector.vue";
import BoardSizeSelector from "../components/form/BoardSizeSelector.vue";
import DeckSelector from "../components/form/DeckSelector";

export default {
  name: "Login",
  components: {
    OkButton,
    Title,
    RoomCode,
    TeamsSelector,
    CardTypeSelector,
    BoardSizeSelector,
    DeckSelector,
  },
  computed: {
    ...mapState("form", ["team"]),
    backgroundColor: function () {
      if (this.inGame) {
        return this.team.color.light;
      } else {
        return "inherit";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h5 {
  text-align: center;
  width: 100%;
  font-size: 1.5rem;
  margin: -0.6rem 0 1.2rem 0;
  font-weight: normal;
  font-style: italic;
  color: rgb(112, 112, 112);
}

.page {
  overflow-y: auto;
  height: calc(100% - 4.6rem);
}
</style>
