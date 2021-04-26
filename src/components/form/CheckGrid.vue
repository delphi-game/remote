<template>
  <div class="outer" :style="{ 'grid-template-rows': outerRows }">
    <div
      class="item"
      v-for="(item, i) in items"
      :key="`item-${i}`"
      :class="{
        selected: item.selected,
      }"
    >
      <button
        class="box"
        :style="{ backgroundColor: item.color }"
        @click.prevent="toggle(item)"
        :class="{ highlighted: highlight && item.selected }"
      ></button>
      <div class="label">{{ capitalize(item.name) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    multi: {
      type: Boolean,
      default: false,
    },
    selected: Array,
    highlight: Boolean,
  },
  model: {
    prop: "selected",
    event: "change",
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggle(item) {
      if (!this.multi) {
        this.items.forEach((item) => {
          item.selected = false;
        });
      }
      const index = this.items.indexOf(item);
      this.items[index].selected = !item.selected;

      const selected = this.items.filter((item) => item.selected);
      this.$emit("change", selected);
    },
  },
  computed: {
    outerRows() {
      return "1fr ".repeat(Math.ceil(this.items.length / 3));
    },
  },
  created() {
    this.options.forEach((option) => {
      this.items.push({ ...option, selected: false });
    });
  },
};
</script>

<style scoped lang="scss">
.outer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0.3rem;
  grid-auto-flow: column;
}

.item {
  display: flex;
  align-items: center;
}

.box {
  -webkit-tap-highlight-color: transparent;
  width: 1.55rem;
  height: 1.55rem;
  background-color: orange;
  border-radius: 0.3rem;
  border: 0.15rem solid #333333;
  margin: 0.185rem 0;
  margin-right: 0.5rem;
  margin-left: 0.2rem;
  cursor: pointer;
}

.label {
  font-size: 110%;
  margin-top: 0.15rem;
}

.selected {
  > .box {
    position: relative;
    border-radius: 0.4rem;
    border: 0.2rem solid black;
    width: 1.85rem;
    height: 1.85rem;
    margin: 0 0;
    margin-right: 0.3rem;
    margin-left: 0.05rem;
    &:after {
      content: "";
      position: absolute;
      width: 0.2rem;
      height: 1.2rem;
      border-radius: 1rem;
      transform: translate(-0.1rem, -0.6rem) rotate(-45deg);
      background-color: black;
    }
  }

  > .label {
    color: black;
    font-weight: bold;
  }
}

.highlighted {
  background-color: #c4c4c4 !important;
}
</style>
