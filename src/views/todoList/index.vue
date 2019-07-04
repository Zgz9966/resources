<template>
  <Card dis-hover style="margin-top: 10%; height: 400px;">
    todolist
    输入框
    按钮添加
    列表
    按钮删除
  </Card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
@Component({
  name: "todoList"
})
export default class TodoList extends Vue {
}
</script>
