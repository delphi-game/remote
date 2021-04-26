<template>
  <div class="form-box">
    <label>Room code (4+ letters)</label>
    <input
      type="text"
      placeholder="Click here..."
      autocomplete="off"
      spellcheck="false"
      ref="codeInput"
      @input="
        $event.target.composing = false;
        format();
      "
      @keyup="
        $event.target.composing = false;
        format();
      "
      @change="
        $event.target.composing = false;
        format();
      "
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formatted: "",
    };
  },
  methods: {
    format(str) {
      const start = this.$refs.codeInput.selectionStart;
      const end = this.$refs.codeInput.selectionEnd;
      const code = this.$refs.codeInput.value || str || "";
      const matches = code.match(/[^A-z]/g) ? code.match(/[^A-z]/g).length : 0;
      const formatted = code.toUpperCase().replace(/[^A-Z]+/, "");
      this.formatted = formatted;
      this.$refs.codeInput.value = formatted;
      this.$nextTick(() => {
        this.$refs.codeInput.setSelectionRange(start, end - matches);
        if (this.formatted.length >= 4) {
          this.blur();
        }
      });
      this.$store.commit("form/setGlobalField", {
        field: "code",
        value: this.formatted,
      });
    },
    blur() {
      this.$refs.codeInput.blur();
    },
  },
  mounted() {
    if (this.$route.query.code) {
      this.format(this.$route.query.code);
    }
  },
};
</script>

<style scoped lang="scss">
input {
  border: 0.15rem solid black;
  border-radius: 0.4rem;
  padding: 0.5rem 0.8rem;
  font-size: 1.6rem;
  color: black;
  text-transform: uppercase;
}

::placeholder {
  color: black;
  opacity: 1;
  text-transform: none;
}
</style>
