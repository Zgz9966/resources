<template>
  <Row style="margin-top: 4%;">
    <i-col span="4">
      <Affix :offset-top="10">
        <Table 
          :columns="columns" 
          :data="data" 
          :show-header="false" 
          size="small" 
          style="border-radius: 2px;"
          @on-row-click="handleClick"
        ></Table>
      </Affix>
    </i-col>
    <i-col span="19" offset="1">
      <!-- <div class="markdown-body hljs" v-html="firstMd"></!-->
    </i-col>
  </Row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
@Component({
  name: "bookList"
})
export default class BookList extends Vue {
  public columns = [
    {
      title: '学习建议',
      key: 'item'
    },
  ];
  public data = [
    {
      item: "基础三板斧",
      index: "#1",
    },
    {
      item: "Web端",
      index: "#2",
    },
    {
      item: "移动端",
      index: "#3",
    },
    {
      item: "计算机基础",
      index: "#4",
    },
    {
      item: "设计相关",
      index: "#5",
    },
    {
      item: "拓展",
      index: "#6",
    },
  ];
  public handleClick(i) {
    document.getElementById(i.index).scrollIntoView();
  }
}
</script>
