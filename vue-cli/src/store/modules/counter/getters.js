export default {
  doubleCounter: state => {
    return state.conuter * 4;
  },
  stringCounter: state => {
    return state.conuter + ' Clicks';
  }
}

