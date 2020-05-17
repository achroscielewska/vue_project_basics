<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default content</p>
          </component>
        </keep-alive>

        <!-- <appQuote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>W wonderful Quote</p>
        </appQuote>
        <appAuthor></appAuthor>
        <appNew></appNew> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";
export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style lang="scss">
@import "assets/breakpoints";

h2 {
  color: blueviolet;
}

@media (min-width: $md) {
  .test {
    border-top: 1px solid red;
  }
}
</style>
