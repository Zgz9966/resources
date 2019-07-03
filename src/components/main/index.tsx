import { Component, Vue } from 'vue-property-decorator';
import Footer from './footer';
import Toolbar from './toolbar';
import { refresh } from '@/lib/lib';
import './index.sass';
@Component({
  name: 'Main',
  components: {
    Footer,
    Toolbar
  }
})
export default class Main extends Vue {
  public drawer: boolean = true;
  public dialog: boolean = false;
  public links = [
    {
      to: '/home',
      icon: 'mdi-home',
      text: '首页'
    },
    {
      to: '/user',
      icon: 'mdi-account-box',
      text: '用户中心'
    },
  ];
  public colors = [
    '#b71c1c',
    '#3f51b5',
    '#4caf50',
    '#f48f81',
    '#ff6d00',
  ];
  public img = '';
  public images = [
    '',
    'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
    'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg',
    'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
    'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg',
    'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg'
  ];
  public setImage = (img: string) => {
    this.img = img;
  }
  public handlePush(name) {
    this.$router.push(name);
  }
  public handleDrawer(e) {
    e.stopPropagation();
    this.drawer = !this.drawer;
  }
  public handleShowFliter() {
    this.dialog = true;
  }
  public handleCloseFliter() {
    this.dialog = false;
  }
  protected render() {
    return (
      <v-app>
        <v-navigation-drawer
          id="app-drawer"
          clipped
          fixed
          app
          v-model={ this.drawer }
          mobile-break-point="991"
          width="260"
        >
          <v-img
            src={ this.img }
            height="100%"
          >
            <v-layout
              class="fill-height"
              tag="v-list"
              column
            >
              {
                this.links.map((link, index) => {
                  return (
                    <v-list-tile
                      key={index}
                      to={link.to}
                      active-class="primary"
                      avatar
                      class="v-list-item"
                    >
                      <v-list-tile-action>
                        <v-icon>{link.icon }</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-title>{ link.text }</v-list-tile-title>
                    </v-list-tile>
                  );
                })
              }
            </v-layout>
          </v-img>
        </v-navigation-drawer>
        <v-toolbar
          color="primary"
          app
          dark
          extended
          fixed
          clipped-left
        >
          <v-toolbar-title><h1>前端手册</h1></v-toolbar-title>
          <template slot = 'extension'>
            <v-toolbar-side-icon onClick={ this.handleDrawer.bind(this) }></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-btn icon><v-icon>group</v-icon></v-btn>
          </template>
          <v-spacer></v-spacer>
          <div v-show={true}>
            <v-text-field
              clearable
              color="#fff"
              append-icon="search"
            >
            </v-text-field>
          </div>
          <v-btn icon><v-icon onClick={ this.handleShowFliter.bind(this) }>apps</v-icon></v-btn>
          <v-dialog
            v-model={ this.dialog }
            max-width="350"
          >
            <v-card>
              <v-container grid-list-xl>
                <v-layout wrap>
                  <v-flex xs12>
                    <div class="text-xs-center body-2 text-uppercase sidebar-filter">Sidebar Filters</div>
                    <v-layout justify-center>
                      {
                        this.colors.map((c) => {
                          return (
                            <v-flex xs2>
                              <v-avatar
                                key={ c }
                                color={ c }
                                size="14"
                              />
                            </v-flex>
                          );
                        })
                      }
                    </v-layout>
                    <v-divider class="mt-3"/>
                  </v-flex>
                  <v-flex
                    xs12
                  >
                    <div class="text-xs-center body-2 text-uppercase sidebar-filter">选择背景图片</div>
                  </v-flex>
                  {
                    this.images.map((img, index) => {
                      return (
                        <v-flex
                          key={ index }
                          xs3
                        >
                          <v-img
                            class={[this.img === img ? 'image-active' : '']}
                            src={ img }
                            height="120"
                            nativeOn-click={this.setImage.bind(this, img)}
                          />
                        </v-flex>
                      );
                    })
                  }
                  <v-flex xs12>
                    <v-btn
                      href="https://github.com/yxbysxcoco"
                      target="_blank"
                      color="primary"
                      block
                    >
                      免费部署上云
                    </v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn
                      href="https://github.com/yxbysxcoco/resources"
                      target="_blank"
                      class="white--text"
                      color="primary"
                      block
                    >
                      文档
                    </v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <div class="text-xs-center body-2 text-uppercase">
                      <div class=" sidebar-filter">
                        分享给你的同事
                      </div>

                      <div>
                        <v-btn
                          color="indigo"
                          class="mr-2 v-btn-facebook"
                          fab
                          icon
                          small
                          round
                        >
                          <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn
                          color="cyan"
                          class="v-btn-twitter"
                          fab
                          icon
                          small
                          round
                        >
                          <v-icon>mdi-twitter</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-dialog>
          <v-btn icon><v-icon on-click={ refresh }>refresh</v-icon></v-btn>
          <v-btn icon><v-icon>more_vert</v-icon></v-btn>
        </v-toolbar>
        <v-content>
          <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view />
          </v-fade-transition>
          </v-container>
        </v-content>
        <Footer></Footer>
      </v-app>
    );
  }
}
