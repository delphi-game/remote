<template>
  <div class="form-box">
    <label>Select teams</label>
    <CheckGrid :options="options" :multi="true" v-model="selected" />
  </div>
</template>

<script>
import Colors from "../../assets/data/colors.json";

import CheckGrid from "./CheckGrid";

export default {
  data() {
    return {
      selected: [],
      options: [],
    };
  },
  components: {
    CheckGrid,
  },
  watch: {
    selected(arr) {
      this.$store.commit("form/setSetupField", {
        field: "teams",
        value: arr.map((x) => x.name),
      });
    },
  },
  created() {
    Object.keys(Colors).forEach((color) => {
      this.options.push({ name: color, color: Colors[color].faint });
    });
  },
};
</script>

<style scoped lang="scss"></style>
