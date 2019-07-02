import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'report',
})
export default class Report extends Vue {
  protected render() {
    return (
      <div>
        // 这里写引入spread的东西
        <a>report</a>
        <h1>helloworld</h1>
      </div>
    );
  }
}
