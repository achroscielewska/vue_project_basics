<template>
  <div class="container">
    <div class="row">
      <h1>Build in directives</h1>
      <p v-text="'Some text'"></p>
      <p v-html="'<strong>Some</strong> text'"></p>
    </div>

    <hr />

    <div class="row">
      <h1>Custom directives</h1>
      <p v-highlight:background.delayed="'yellow'">Color this</p>
      <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'blue', delay: 2000}">Color this</p>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);

              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
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
