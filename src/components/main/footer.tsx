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
    "fab fa-github"
  ];
  protected render() {
    return (
      <v-footer height="auto" fixed={ true } color="primary">
        <h4> &copy; 2019 |
          <strong><a href="https://github.com/yxbysxcoco" style="color: #111;"> yxbysxcoco</a></strong> | 🚀
        </h4>
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
