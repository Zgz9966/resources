import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'user',
})
export default class User extends Vue {
  protected render() {
    return (
      <div>
        <a>user</a>
      </div>
    );
  }
}
