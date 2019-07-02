import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'App',
})
export default class App extends Vue {
  protected render() {
    return (<router-view />);
  }
}
