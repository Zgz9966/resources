import {
  getLocalList, setLocalList
} from '@/lib/lib';

export default {
  namespaced: true,
  state: {
    todoList: getLocalList() ? getLocalList() : []
  },
  mutations: {
    // 添加一项
    addItem(state, content) {
      state.todoList.push({text: content, complete: false, edit: false});
      setLocalList(state.todoList);
    },
    // 更新某一项
    updateItem(state, upObj) {
      state.todoList[upObj.index].text = upObj.content;
      state.todoList[upObj.index].edit = false;
      setLocalList(state.todoList);
    },
    // 更新完成的项
    completeItem(state, index) {
      state.todoList[index].complete = true;
      setLocalList(state.todoList);
    },
    // 删除某一项
    deleteItem(state, index) {
      state.todoList.splice(index, 1);
      setLocalList(state.todoList);
    },
    // 开始编写某一项
    editItem(state, index) {
      state.todoList[index].edit = true;
      setLocalList(state.todoList);
    }
  },
  actions: {},
};
