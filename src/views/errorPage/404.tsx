import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'error404',
})
export default class Error401 extends Vue {

  protected render() {
    return (
      <a>您要找的页面丢失啦</a>
    );
  }
}
