<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("counter", ["asyncIncrement", "asyncDecrement"]),

    increment(by) {
      this.$store.dispatch("counter/asyncIncrement", by);
    },
    decrement() {
      this.$store.dispatch("counter/asyncDecrement");
    }

  }
};
</script>
