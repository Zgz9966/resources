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
      <div class="markdown-body" v-html="firstMd" v-highlight></div>
      <!-- <mavon-editor
        v-model="firstMd"
        :toolbarsFlag="false"
        :editable="false"
        defaultOpen="preview"
        :subfield="false"
        :ishljs="true"
        :boxShadow="false"
        codeStyle='hybrid'
      />  -->
    </i-col>
  </Row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import first from './basic.md';
@Component({
  name: "advise"
})
export default class Advise extends Vue {
  public firstMd = first;
  public columns = [
    {
      title: '学习建议',
      key: 'item'
    },
  ];
  public data = [
    {
      item: "前端是什么",
      index: "#1",
    },
    {
      item: "起步",
      index: "#2",
    },
    {
      item: "基础学习",
      index: "#3",
    },
    {
      item: "库学习",
      index: "#4",
    },
    {
      item: "Vue学习",
      index: "#5",
    },
    {
      item: "React学习",
      index: "#6",
    },
    {
      item: "Angular学习",
      index: "#7",
    },
    {
      item: "如何进阶",
      index: "#8",
    },
    {
      item: "打造script工作流",
      index: "#9",
    },
  ];
  public handleClick(i) {
    document.getElementById(i.index).scrollIntoView();
  }
}
</script>
