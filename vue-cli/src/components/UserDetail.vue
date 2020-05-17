<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetNameFN()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    resetNameFN: {
      type: Function
    },
    userAge: {
      type: Number
    }
  },
  methods: {
    resetName() {
      this.name = "Agnieszka";
      this.$emit("nameWasReset", this.name);
    }
  },
  created() {
    eventBus.$on('ageWasEdited', (data) => {
      this.userAge = data;
    })
  }
};
</script>

<style lang="scss" scoped>
div {
  background-color: lightcoral;
}
</style>
