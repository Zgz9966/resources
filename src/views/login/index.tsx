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
      <v-app dark>
        <v-container gird-list-md>
          <v-layout row warp>
            <v-flex xs4></v-flex>
            <v-flex xs4>
              <v-card dark color="secondary" style="margin-top: 100px; margin-bottom: 100px; border-radius: 5px">
                <v-progress-linear indeterminate={ true } height="3"></v-progress-linear>
                <v-card-text class="px-0">
                  <v-layout>
                    <h1 style="margin: auto;">山下出泉</h1>
                  </v-layout>
                  <v-layout>
                    <h3 style="margin: auto;">Sign in</h3>
                  </v-layout>
                  <v-layout>
                    <h4 style="margin: auto; color: #aaa">全球五百強山下出泉協同生產雲</h4>
                  </v-layout>
                  <v-form style="margin: 20px;">
                    <v-text-field
                      v-model={ this.userInfo.userName }
                      label="Email or phone"
                    ></v-text-field>
                    <a>forget account?</a>
                    <v-text-field
                      v-model={ this.userInfo.password }
                      type="password"
                      label="password"
                    ></v-text-field>
                    <a>forget password?</a>
                    <v-layout style="margin-top: 20px">
                      <v-flex xs8>
                        <a style="margin: 20px 0 0 12px; color: #fff;">創建新賬戶</a>
                      </v-flex>
                      <v-flex xs4>
                        <v-btn color="info">Login</v-btn>
                      </v-flex>
                    </v-layout>
                    <input
                      style="display: none"
                      type="password"
                      autocomplete="new-password"
                      placeholder="请输入"
                    />
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-app>
    );
  }
}
