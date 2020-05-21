export default {
  simpleIncrement: (state) => {
    state.conuter ++;
  },
  increment: (state, payload) => {
    state.conuter += payload;
  },
  decrement: state => {
    state.conuter--
  }
}

