import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Footer',
})
export default class Footer extends Vue {
  public icons = [
    "fab fa-facebook",
    "fab fa-twitter",
    "fab fa-google-plus",
    "fab fa-linkedin",
    "fab fa-instagram"
  ];
  protected render() {
    return (
      <v-footer height="auto" fixed={ true }>
        <h4> &copy; 2019 - _______ | <strong>湖南山下出泉信息技术有限公司</strong> | 前端  🚀发射中心</h4>
        <v-spacer></v-spacer>
        {this.icons.map((icon, index) => {
            return (
              <v-btn class="mx-2" icon>
                <v-icon size="20px" key={ index }>{ icon }</v-icon>
              </v-btn>
            );
        })}
      </v-footer>
    );
  }
}
