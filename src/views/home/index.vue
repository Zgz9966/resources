<template>
  <Card dis-hover style="margin-top: 10%; height: 400px;">
    <div style="margin: 20px;">
      <h2>首页空空荡荡冷冷清清,所以就介绍一下这个网站包含的内容吧? <small></small></h2>
    </div>
    <Collapse simple accordion>
      <Panel name="1">
        TodoList
        <p slot="content">基于LocalStorage本地存储的TodoList,快速制定你的计划</p>
      </Panel>
      <Panel name="2">
        <span style="text-decoration: line-through">很专业</span>很一般的学习顺序建议
        <p slot="content">我会根据我以往的开发经验给出一些很一般。。。的学习建议</p>
      </Panel>
      <Panel name="3">
        资源收录
        <p slot="content">很多现成的轮子和开发中很贴心的实用网站,我会按照分类收录进来</p>
      </Panel>
      <Panel name="4">
        书单
        <p slot="content">大部分我看了觉得不错的书会进行标记,也会收录一些大家觉得很不错的书</p>
      </Panel>
      <Panel name="5">
        Blog
        <p slot="content">我会把我的博客迁移到这里来,里面有很多我走过的弯弯曲曲扭扭斜斜的路,希望能给你一些帮助</p>
      </Panel>
    </Collapse>
    <div style="float: right; margin-top: 20px;">
      <Button><Icon size="18" type="md-arrow-round-forward" /></Button>
    </div>
  </Card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
@Component({
  name: "home"
})
export default class Home extends Vue {
}
</script>
