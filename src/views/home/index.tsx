import { Component, Vue } from 'vue-property-decorator';
import './index.scss';
@Component({
  name: 'home',
})
export default class Home extends Vue {
  protected render() {
    return (
      <v-layout row>
        <v-flex xs9>

        </v-flex>
        <v-flex xs3>
        123
        </v-flex>
      </v-layout>
    );
  }
}
