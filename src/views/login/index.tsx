import { Component, Vue } from 'vue-property-decorator';
import { UserInfo } from '@/lib/user';
@Component({
  name: 'login',
})
export default class Login extends Vue {

  public languages = [
    "English",
    "简体中文",
    "繁體中文"
  ];

  public userInfo: UserInfo = {
    userName: "",
    password: ""
  };

  protected render() {
    return (
      <div>login</div>
    );
  }
}
