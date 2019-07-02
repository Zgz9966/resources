import { Component, Vue } from 'vue-property-decorator';
import './index.scss';
@Component({
  name: 'home',
})
export default class Home extends Vue {
  protected render() {
    return (
      <div>home这是一个home页面</div>
    );
  }
}
