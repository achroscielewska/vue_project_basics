<template>
  <div>
    <button class="btn btn-primary" @click="simpleIncrement">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['simpleIncrement', 'decrement'])
  }
};
</script>
