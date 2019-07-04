<template>
  <Row style="margin-top: 4%;">
    <i-col span="4">
      <Affix :offset-top="10">
        <Table 
          :columns="columns" 
          :data="data" 
          :show-header="false" 
          size="small" 
          style="border-radius: 4px;"
          @on-row-click="handleClick"
        ></Table>
      </Affix>
    </i-col>
    <i-col span="19" offset="1">
      <div class="markdown-body hljs" v-html="basicMd"></div>
    </i-col>
  </Row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import md from '../../assets/md/index.md';
@Component({
  name: "advise"
})
export default class Advise extends Vue {
  public basicMd = md;
  public columns = [
    {
      title: '学习建议',
      key: 'item'
    },
  ];
  public data = [
    {
      item: "起步"
    },
    {
      item: "基础"
    },
    {
      item: "视野"
    },
  ];
  public handleClick(i) {
    console.log(i);
  }
}
</script>
