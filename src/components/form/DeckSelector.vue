<template>
  <div class="form-box">
    <label>Deck</label>
    <select v-model="selected">
      <optgroup
        :label="option.pack"
        v-for="(option, index) in options"
        :key="`option-${index}`"
      >
        <option
          v-for="(deck, i) in option.decks"
          :key="`deck-${i}`"
          :value="[option.pack, deck]"
        >
          {{ deck }}
        </option>
      </optgroup>
    </select>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      selected: ["Official", "Original"],
    };
  },
  watch: {
    selected(arr) {
      this.$store.commit("form/setSetupField", {
        field: "deck",
        value: arr,
      });
    },
  },
  computed: {
    ...mapState("form", {
      options: (state) => state.setup.deck.options,
    }),
  },
};
</script>

<style scoped lang="scss">
select {
  padding: 0.3rem 0.3rem;
  background-color: white;
  border-radius: 0.3rem;
  border: 0.15rem solid #333333;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>
