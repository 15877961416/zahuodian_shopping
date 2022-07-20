//异步处理
const actions = {
  get_SET_Data_det({ commit },res) {
    commit("SET_Data_det", res);
  }
}

export default actions;