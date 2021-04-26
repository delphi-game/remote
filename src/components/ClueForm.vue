<template>
  <div class="area">
    <div class="row">
      <label>Send a clue:</label>
      <input type="text" placeholder="Click here..." autocomplete="off" />
    </div>
    <div class="row">
      <label>Number of words:</label>
      <NumberInputSpinner
        :min="0"
        :max="999999999"
        :step="1"
        :inputClass="'InputSpinner'"
        :buttonClass="'InputSpinnerButton'"
        :integerOnly="true"
        v-model="numberOfWords"
        class="Spinner"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import NumberInputSpinner from "vue-number-input-spinner";

export default {
  data() {
    return {
      numberOfWords: 0,
    };
  },
  components: {
    NumberInputSpinner,
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
.area {
  background-color: #646156;
  color: white;
  padding: 4vw;
}

.row {
  display: flex;
  flex-direction: column;
  border-bottom: rgb(97, 97, 97) 0.2rem solid;
}

.row:last-child {
  border-bottom: none;
}

.row:first-child {
  margin-bottom: 1rem;
}

label {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}

input[type="text"] {
  border: #707070 0.1rem solid;
  padding: 0.5rem 0.8rem;
  font-size: 1.6rem;
  color: black;
  width: calc(100% - 1.7rem);
}

::placeholder {
  color: black;
  opacity: 1;
  text-transform: none;
}
</style>

<style>
.InputSpinner {
  -webkit-appearance: none;
  -moz-appearance: textfield;
  border: #707070 0.1rem solid;
  background: white;
  float: left;
  font-size: 1.5rem;
  height: 40px;
  margin: 0;
  outline: none;
  text-align: center;
  width: calc(10% + 2rem);
  pointer-events: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.InputSpinner::-webkit-outer-spin-button,
.InputSpinner::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

.InputSpinnerButton {
  -webkit-appearance: none;
  background: #adadad;
  border: #707070 0.1rem solid;
  color: #707070;
  cursor: pointer;
  float: left;
  font-size: 1.8rem;
  height: 40px;
  margin: 0;
  width: 40px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
