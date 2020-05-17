<template>
  <div>
    <h3>New</h3>
    <button @click="counter++">Increase!</button>
    <p>{{counter}}</p>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      counter: 0
    }
  },
  deactivated() {
    console.log('deactivated')
  },
  activated() {
    console.log('activated')
  }
};
</script>
<style lang="scss" scoped>


</style>
