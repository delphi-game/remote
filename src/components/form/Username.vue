<template>
  <div class="form-box">
    <label>Username</label>
    <input
      type="text"
      placeholder="Click here..."
      autocomplete="off"
      spellcheck="false"
      ref="usernameInput"
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
    format() {
      const start = this.$refs.usernameInput.selectionStart;
      const end = this.$refs.usernameInput.selectionEnd;
      const username = this.$refs.usernameInput.value;
      const matches = username.match(/[^a-zA-Z0-9_-]{1,}/g)
        ? username.match(/[^a-zA-Z0-9_-]{1,}/g).length
        : 0;
      const formatted = username.replace(/[^a-zA-Z0-9_-]{1,}/g, "");
      this.formatted = formatted;
      this.$refs.usernameInput.value = formatted;
      this.$nextTick(() => {
        this.$refs.usernameInput.setSelectionRange(start, end - matches);
      });
      this.$store.commit("form/setLoginField", {
        field: "username",
        value: this.formatted,
      });
    },
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
}

::placeholder {
  color: black;
  opacity: 1;
  text-transform: none;
}
</style>
