<template>
  <h1>
    <span
      v-for="(char, i) in 'Delphi'"
      :key="char"
      :class="'title-color-' + (i + 1)"
      >{{ char }}</span
    >
    Ω
  </h1>
</template>

<script></script>

<style lang="scss">
@use "sass:list";

h1 {
  margin: 1.5rem;
  text-align: center;
  font-size: 3.2rem;
  font-weight: bold;
  color: black;
  text-shadow: 0.2rem 0.15rem rgba(0, 0, 0, 0.15);
}

$colors: #f33b30, #ff7f00, #fabe1a, #1ba85b, #496ab4, #a6429f;

@for $i from 1 through 6 {
  .title-color-#{$i} {
    color: list.nth($colors, $i);
  }
}
</style>
