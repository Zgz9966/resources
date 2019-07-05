<template>
  <Card style="margin-top: 5%" dis-hover>
    <Input 
      placeholder="请输入你的待办事项" 
      @keyup.enter.native="handleAddTodoItem" 
      v-model="InputTodoItem"
    />
    <Card 
      dis-hover 
      style="margin-top: 12px;" 
      v-for="(i, index) in list"
      :key = "index"
    >
      <div v-if="i.edit">
        <Input 
          placeholder="按回车保存更改" 
          @keyup.enter.native="handleUpdateTodoItem(index)"  
          v-model="editting"
        />
      </div>
      <div v-else>
        <span :class="{ complete : i.complete ? true : false}">{{ i.text }}</span>
        <Icon 
          type="ios-close-circle-outline" 
          size="24" 
          style="float: right; cursor: pointer;" 
          @click="handleDelete(index)" 
        />
        <Icon 
          v-show="!i.complete" 
          type="md-checkmark" 
          size="24" 
          style="float: right; cursor: pointer;" 
          @click="handleUpdateComplete(index)" 
        />
        <Icon 
          v-show="!i.complete" 
          type="ios-create-outline" 
          size="24" 
          style="float: right; cursor: pointer;" 
          @click="handleEdit(index)" 
        />
      </div>
    </Card>    
  </Card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation, namespace } from "vuex-class";

const todo = namespace("todo");

@Component({
  name: "todo",
})
export default class Todo extends Vue {
  @todo.State("todoList") public list;
  @todo.Mutation("addItem") public addItem;
  @todo.Mutation("updateItem") public updateItem;
  @todo.Mutation("completeItem") public completeItem;
  @todo.Mutation("deleteItem") public deleteItem;
  @todo.Mutation("editItem") public editItem;
  public InputTodoItem: string = "";
  public editting: string = "";

  public handleAddTodoItem() {
    this.addItem(this.InputTodoItem);
  }
  public handleUpdateComplete(index) {
    this.completeItem(index);
  }
  public handleDelete(index) {
    this.deleteItem(index);
  }
  public handleEdit(index) {
    this.editItem(index);
  }
  public handleUpdateTodoItem(index) {
    const content = this.editting;
    this.updateItem({index, content});
  }
}
</script>

<style>
  .complete {
    text-decoration: line-through
  }
</style>

