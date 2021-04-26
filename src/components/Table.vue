<template>
  <table>
    <tbody>
      <tr>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
      </tr>
      <tr>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
      </tr>
      <tr>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
      </tr>
      <tr>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
      </tr>
      <tr>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
        <td>Wordish</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    isVertical: Boolean,
  },
  computed: {
    ...mapState(["roomCode", "team", "player", "upNext"]),
  },
};
</script>

<style scoped lang="scss">
table {
  border-collapse: collapse;
}

table,
tbody {
  height: 100%;
  width: 100%;
}

td {
  border: rgb(97, 97, 97) 0.2rem solid;
  text-align: center;
  font-size: 1.2rem;
}

td:first-child {
  border-left: none;
}

td:last-child {
  border-right: none;
}

tr:first-child > td {
  border-top: none;
}

tr:last-child > td {
  border-bottom: none;
}
</style>
