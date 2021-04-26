<template>
  <div class="wide" ref="wide" v-touch:swipe="swipeHandler">
    <div class="left">
      <ClueForm />
      <PastClues />
    </div>
    <div class="middle">
      <button @click="slide()" class="slide">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 85 207"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          xmlns:serif="http://www.serif.com/"
          style="
            fill-rule: evenodd;
            clip-rule: evenodd;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 20;
          "
        >
          <g transform="matrix(1,0,0,1,-7392.11,-690.647)">
            <g transform="matrix(1.64993,0,0,2.83021,-4813.17,-1295.07)">
              <path
                d="M7407.75,707.609L7438.19,738.052C7438.19,738.052 7407.75,768.495 7407.75,768.495"
                style="fill: none; stroke: white; stroke-width: 10.64px"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
    <div class="right">
      <CardList />
    </div>
  </div>
</template>

<script>
import ClueForm from "./ClueForm";
import PastClues from "./PastClues";
import CardList from "./CardList";

export default {
  components: {
    ClueForm,
    PastClues,
    CardList,
  },
  methods: {
    slide() {
      this.$refs.wide.classList.toggle("slide-left");
    },
    swipeHandler(direction) {
      switch (direction) {
        case "left":
          this.$refs.wide.classList.add("slide-left");
          break;
        case "right":
          this.$refs.wide.classList.remove("slide-left");
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.wide {
  width: 200%;
  transition: transform 0.4s cubic-bezier(0, 0.72, 0.92, 0.86);
  transform: translateX(0);
  display: grid;
  grid-template-columns: 46% 4% 46%;
  > div > button > svg {
    transition: transform 0.5s ease-in-out;
  }
  &.slide-left {
    transform: translateX(-46%);
    > div.middle > button > svg {
      transform: scaleX(-1);
    }
  }
}

.left,
.right {
  display: flex;
  overflow-y: auto;
  flex-direction: column;
}

.middle {
  display: flex;
}

button.slide {
  border: none;
  background-color: rgba(29, 29, 29, 0.4);
  cursor: pointer;
  height: 100%;
}

@media (min-width: 800px) {
  div.wide {
    width: 100%;
    display: flex;
    &.slide-left {
      transform: translateX(0);
    }
  }
  div.middle {
    display: none;
  }
  div.left,
  div.right {
    width: 50%;
  }
}
</style>
