import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'siderbar',
})
export default class SiderBar extends Vue {

  protected render() {
    return (
      <div>侧边栏</div>
    );
  }
}
