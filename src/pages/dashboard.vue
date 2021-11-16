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
                  src="https://i.postimg.cc/X7mxW0Sm/logonpo.png"></v-img>
        <v-list dense>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
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

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
<<<<<<< HEAD
      links: [
        {
          title: "Organization's basic information",
          icon: "mdi-calendar-multiple-check",
          path: "#",
          // items: [
          //   { title: "link-1", icon: "mdi-account-group", path: "jobs" },
          //   {
          //     title: "link-2",
          //     icon: "mdi-account-group",
          //     path: "employee",
          //   },
          //   {
          //     title: "link-3",
          //     icon: "mdi-account-group",
          //     path: "position",
          //   },
          // ],
        },
        {
          title: "Scope of Engagement Information",
          icon: "mdi-calendar-multiple-check",
          path: "#",
        },
        {
          title: "NPO Nominated resource personal details (provide Bio)",
          icon: "mdi-calendar-multiple-check",
          path: "#",
        },
=======
      items: [
        { text: 'Organization info', icon: 'mdi-domain' },
        { text: 'Engagement Info', icon: 'mdi-clipboard-check' },
        { text: 'Nominated Personal', icon: 'mdi-account-tie' },
>>>>>>> 4bbfaf000a02aaaf11ca9ba2d2639b65cb1635e4
      ],
    };
  },
};
</script>
<style lang="scss"></style>
