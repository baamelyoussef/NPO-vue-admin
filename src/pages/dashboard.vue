<template>
  <div>
    <v-app-bar fixed app short class="shadow">
      <!-- color="wall" -->
      <v-app-bar-nav-icon color="text" @click.stop="drawer = !drawer" />
      <v-toolbar-title>NPO Form </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="wall shadow">
      <v-card dark tile flat class="wall">
        <v-img
          lazy-src="https://i.postimg.cc/X7mxW0Sm/logonpo.png"
          max-height="50px"
          max-width="50px"
          class="ma-4"
          align="center"
          justify="center"
          src="https://i.postimg.cc/X7mxW0Sm/logonpo.png"
        ></v-img>
        <v-list nav class="nav-list">
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="accent">
      <router-view />
    </v-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { text: "Organization info", icon: "mdi-domain" },
        { text: "Engagement Info", icon: "mdi-clipboard-check" },
        { text: "Nominated Personal", icon: "mdi-account-tie" },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
