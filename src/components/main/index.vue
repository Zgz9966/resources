<template>
  <div>
    <Row>
      <i-col :xs="{ span: 22, offset: 1 }" :lg="{ span: 18, offset: 3 }">
        <Menu mode="horizontal" accordion :active-name="$route.name" @on-select="handleSelect">
          <MenuItem name="home">
            <Icon type="ios-cloud" size="24" />
            首页
          </MenuItem>
          <MenuItem name="todoList">
            <Icon type="md-headset" size="24" />
            TodoList
          </MenuItem>
          <MenuItem name="advise">
            <Icon type="md-pulse" size="24" />
            学习建议
          </MenuItem>
          <MenuItem name="bookList">
            <Icon type="md-bookmark" size="24" />
            书单
          </MenuItem>
          <MenuItem name="resource">
            <Icon type="logo-google" size="24" />
            资源收录
          </MenuItem>
          <MenuItem name="Blog">
            <Icon type="ios-flask" size="24" />
            Blog
          </MenuItem>
          <Dropdown trigger="click" style="float: right;">
            <Icon type="md-list" size="24" />
            <DropdownMenu slot="list">
              <DropdownItem>操作1</DropdownItem>
              <DropdownItem>操作2</DropdownItem>
              <DropdownItem>操作3</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown trigger="click" style="margin-right: 20px; margin-left: 20px; float: right;">
            <Icon type="md-beer" size="24" />
            <DropdownMenu slot="list">
              <DropdownItem disabled>
                <Card style="width:280px; height: 400px;" dis-hover>
                  <img style="width: 244px; height: 350px" src="../../assets/imgs/wechat.png">
                  <p>如果你觉得资源不错，不如请我霍☕️</p>
                </Card>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <!-- <Select v-model="searchItem" style="width:200px;" placeholder="输入关键字查询..." @on-change="handleSearch" clearable>
            <Option v-for="item in searchList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select> -->
        </Menu>
      </i-col>
    </Row>
    <Layout style="background-color: #fff; ">
      <Content>
        <Row>
          <i-col :xs="{ span: 18, offset: 3 }" :lg="{ span: 14, offset: 5 }">
            <transition name="fade">
              <router-view />
            </transition>
          </i-col>
        </Row>
      </Content>
      <Footer style="text-align: center; background-color: #fff; margin-top: 300px;">
        &copy; 2019 | <Icon type="logo-github" size="24" /> Yxbysxcoco
      </Footer>
    </Layout>
    <BackTop></BackTop>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
@Component({
  name: "home"
})
export default class Home extends Vue {
  public searchItem = "";
  public searchList: object[] = [
    {
      value: 'Vue',
      label: 'Vue'
    },
    {
      value: 'React',
      label: 'React'
    },
  ];
  public handleSearch() {
    console.log(this.searchItem);
  }
  public handleSelect(name) {
    this.$router.push(name);
  }
}
</script>
