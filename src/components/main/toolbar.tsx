import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name: 'toolbar',
})
export default class Toolbar extends Vue {
  @Prop(Object) public app;

  protected render() {
    return (
      <template>
        <v-toolbar
          color="primary"
          app
          dark
          extended
          fixed
          clipped-left
        >
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <template v-slotExtension>
            <v-toolbar-title class="white--text">Title</v-toolbar-title>
          </template>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>apps</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>refresh</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
    );
  }
}
