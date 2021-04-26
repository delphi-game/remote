<template>
  <div class="bar" :style="{ backgroundColor }">
    <div class="stat">
      <span class="label">In room</span>
      <span>{{ room.code }}</span>
    </div>
    <div class="stat">
      <span class="label">On team</span>
      <span class="capitalize">{{ self.team.name }}</span>
    </div>
    <div class="stat">
      <span class="label">Role</span>
      <span class="capitalize">{{ self.role }}</span>
    </div>
    <div class="stat">
      <span class="label">Name</span>
      <span>{{ self.username }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    isVertical: Boolean,
    backgroundColor: String,
  },
  computed: {
    ...mapState("game", ["room", "self"]),
  },
};
</script>

<style scoped lang="scss">
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5vw;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  color: white;
}

.stat {
  display: flex;
  flex-direction: column;
}

.label {
  margin-right: 0.5rem;
  font-size: 0.8rem;
}

.capitalize {
  text-transform: capitalize;
}

.label:last-child {
  margin-right: 0;
}

.label::after {
  content: ":";
}
</style>
