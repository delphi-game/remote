<template>
  <div class="form-box">
    <label>Pick an open team</label>
    <CheckGrid :options="options" :multi="false" v-model="selected" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import CheckGrid from "./CheckGrid";

export default {
  data() {
    return {
      selected: [],
    };
  },
  components: {
    CheckGrid,
  },
  watch: {
    selected(arr) {
      this.$store.commit("form/setLoginField", {
        field: "team",
        value: arr[0].name,
      });
    },
  },
  computed: {
    ...mapState("form", {
      options: (state) => state.login.team.options,
    }),
  },
};
</script>

<style scoped lang="scss"></style>
