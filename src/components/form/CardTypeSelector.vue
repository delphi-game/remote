<template>
  <div class="form-box">
    <label>Card Type</label>
    <CheckGrid
      :options="options"
      :multi="false"
      :highlight="true"
      v-model="selected"
    />
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
      this.$store.commit("form/setSetupField", {
        field: "cardType",
        value: arr[0].name,
      });
    },
  },
  computed: {
    ...mapState("form", {
      options: (state) => state.setup.cardType.options,
    }),
  },
};
</script>

<style scoped lang="scss"></style>
