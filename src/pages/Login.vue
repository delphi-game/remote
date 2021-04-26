<template>
  <div class="page">
    <Title />
    <div class="form"><RoomCode /><Username /><TeamPicker /><RolePicker /></div>

    <OkButton
      text="JOIN"
      position="fixed"
      color="black"
      v-if="global.code.value.length >= 4"
    />
    <Notice v-else :inner="notice" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import OkButton from "../components/OkButton.vue";
import Title from "../components/Title.vue";
import Notice from "../components/Notice.vue";

import RoomCode from "../components/form/RoomCode.vue";
import Username from "../components/form/Username.vue";
import TeamPicker from "../components/form/TeamPicker.vue";
import RolePicker from "../components/form/RolePicker.vue";

export default {
  name: "Login",
  components: {
    OkButton,
    Title,
    RoomCode,
    TeamPicker,
    RolePicker,
    Username,
    Notice,
  },
  computed: {
    ...mapState("form", {
      global: (state) => state.global,
    }),
    backgroundColor: function () {
      if (this.inGame) {
        return this.team.color.light;
      } else {
        return "inherit";
      }
    },
  },
  data() {
    return {
      notice: `Don’t have a room to join?<br /><a href="https://rules.dphi.ml" target="_blank">Click here to learn how to make one.</a>`,
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  overflow-y: auto;
  height: 100%;
}

.form {
  margin-bottom: 7rem;
}
</style>
