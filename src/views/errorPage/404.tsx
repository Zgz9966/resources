import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'error404',
})
export default class Error404 extends Vue {

  protected render() {
    return (
      <a>您要找的页面丢失啦</a>
    );
  }
}
