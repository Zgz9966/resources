<template>
  <Card dis-hover style="margin-top: 10%; height: 400px;">
    <div style="font-size: 64px; line-height: 360px; text-align: center;">404</div>
  </Card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
@Component({
  name: "error404"
})
export default class Error404 extends Vue {
}
</script>
