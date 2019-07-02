import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'error401',
})
export default class Error401 extends Vue {

  protected render() {
    return (
      <a>401401</a>
    );
  }
}
