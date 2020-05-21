export const simpleIncrement = (state) => {
  state.conuter ++;
};

export const increment = (state, payload) => {
  state.conuter += payload;
};

export const decrement = state => {
  state.conuter--
};
