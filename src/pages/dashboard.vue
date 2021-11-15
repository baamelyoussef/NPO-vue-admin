<template>
  <div>
    <v-app-bar fixed app short class="shadow">
      <!-- color="wall" -->
      <v-app-bar-nav-icon color="text" @click.stop="drawer = !drawer" />
      <v-toolbar-title> title </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer"  app class="wall shadow">
      <v-card dark tile flat class="wall">
        <v-list nav dense class="menu-links">
          <div v-for="item in links" :key="item.title">
            <v-list-group no-action v-if="item.items">
              <template #activator>
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="child in item.items"
                :key="child.title"
                :to="`/${child.path}`"
                router
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item v-else class="alone-list" :to="`/${item.path}`" router>
              <v-list-item-icon class="regular">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
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
      links: [
        {
          title: "Core HR",
          icon: "mdi-calendar-multiple-check",
          path: "#",
          items: [
            { title: "link-1", icon: "mdi-account-group", path: "jobs" },
            {
              title: "link-2",
              icon: "mdi-account-group",
              path: "employee",
            },
            {
              title: "link-3",
              icon: "mdi-account-group",
              path: "position",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
