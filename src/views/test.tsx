import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'test',
})
export default class Test extends Vue {
  public url = "https://cdn.vuetifyjs.com/images/parallax/material.jpg";
  public handletest() {
    this.url = "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg";
  }
  protected render() {
    return (
      <div>
        <v-img src={this.url} />
        <button on-click={this.handletest.bind(this)}>按钮</button>
      </div>
    );
  }
}
