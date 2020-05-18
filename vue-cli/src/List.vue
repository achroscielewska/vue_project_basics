<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8">
        <button @click="fruits.push('Berries')">Add fruit</button>
        <input v-model="filterText" />
        <ul>
          <li v-for="fruit in filterFruits" :key="fruit">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin";
export default {
  mixins: [fruitMixin]
};
</script>

<style lang="scss"></style>
