<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <hr />
        <input v-model="filterText" />
        <ul>
          <li v-for="fruit in filterFruits" :key="fruit">{{ fruit }}</li>
        </ul>
      </div>
      <hr />
      <div>
        <appList></appList>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";

export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: "Hello there!"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
};
</script>

<style lang="scss">
@import "assets/breakpoints";

@media (min-width: $md) {
  .test {
    border-top: 1px solid red;
  }
}
</style>
