export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Bannana', 'Mango'],
      filterText: ''
    };
  },
  computed: {
    filterFruits() {
      return this.fruits.filter((el) => {
         return el.match(this.filterText);
      })
    }
  }
}
