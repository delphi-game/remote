<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

html {
  font-size: 4vmin;
}

@media (min-width: 450px) {
  html {
    font-size: 16px;
  }
}

body {
  background-color: #f2f2f2;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3d3d3d;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.long {
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
}

.tall {
  display: grid;
  grid-template-rows: 1fr calc(5% + 2rem);
  height: 100%;
}

button {
  touch-action: manipulation;
}

input {
  user-select: text;
}

.form-box {
  display: flex;
  width: calc(100% - 2.4rem);
  padding: 1.2rem;
  background-color: #d8d8d8;
  flex-direction: column;
  > label {
    font-size: 1.15rem;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 0.7rem;
  }
  &:not(:last-child) {
    border-bottom: 0.18rem solid grey;
  }
}

button {
  -webkit-tap-highlight-color: transparent;
}

button:active,
input:active,
select:active {
  outline: none;
}
</style>
