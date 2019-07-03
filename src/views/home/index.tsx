import { Component, Vue } from 'vue-property-decorator';
import './index.scss';
import md from '../../assets/md/index.md';
@Component({
  name: 'home',
})
export default class Home extends Vue {
  public content: string = md;
  public mounted() {
    // console.log(this.content);
  }

  protected render() {
    return (
      <div>
        <div class="markdown-body hljs" domPropsInnerHTML={this.content}></div>
        {/* <mavon-editor
          v-model={this.content}
          toolbarsFlag={false}
          editable={false}
          defaultOpen="preview"
          subfield={false}
          ishljs={true}
          codeStyle='vs2015'
        /> */}
      </div>
    );
  }
}
