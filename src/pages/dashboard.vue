<template>
  <div>
    <v-app-bar fixed app short class="shadow">
      <!-- color="wall" -->
      <v-app-bar-nav-icon color="text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="font-weight-medium text--text">NP Project </v-toolbar-title>
      <v-spacer />
      <v-btn icon color="text" class="mx-1">
        <v-icon> mdi-apps </v-icon>
      </v-btn>
      <v-btn icon color="text">
        <v-icon> mdi-clipboard-arrow-down </v-icon>
      </v-btn>
      <user-avatar-menu color="text" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="wall">
      <v-card dark tile flat class="wall">
        <div class="d-flex justify-end pa-4 pb-0">
          <user-avatar-menu />
        </div>
        <div class="d-flex flex-column align-center text-center mb-2">
          <v-img
            lazy-src="https://i.postimg.cc/X7mxW0Sm/logonpo.png"
            max-height="96px"
            max-width="96px"
            class="my-6"
            src="https://i.postimg.cc/X7mxW0Sm/logonpo.png"
          />
          <h4 style="font-size: 14px">Put Company Name</h4>
          <div class="caption secondary--text">email@email.com</div>
        </div>
        <v-list nav class="menu-links">
          <div v-for="(item, i) in links" :key="i" cl>
              <p class="upperline mt-8 mb-2 primary--text mx-4" v-if="i === 3">
                modules
              </p>
            <div v-if="item.items">
              <v-list-group no-action class="mb-1">
                <template #activator>
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <!-- sub links -->
                <template v-for="(child, i) in item.items">
                  <v-list-item
                    v-if="child"
                    :to="child.path"
                    exact
                    :key="i"
                    router
                  >
                    <v-list-item-icon class="mr-1 ml-n2 mt-5">
                      <v-icon size="7">mdi-brightness-1</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="child.title"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list-group>
            </div>
            <div v-else>
              <p class="upperline mt-8 mb-2 primary--text mx-4" v-if="i === 0">dashbaords</p>
              <v-list-item class="alone-list mb-1" :to="item.path" router>
                <v-list-item-icon class="regular">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </div>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="accent">
      <router-view />
    </v-main>
  </div>
</template>
<script>
import UserAvatarMenu from "@/components/UserAvatarMenu.vue";
export default {
  components: { UserAvatarMenu },
  data() {
    return {
      drawer: true,
      links: [
        {
          title: "Dashboard",
          icon: "mdi-view-carousel",
          path: { path: "/" },
        },
        {
          title: "Analytics",
          icon: "mdi-google-analytics",
          path: { path: "/#" },
        },
        {
          title: "All Projects",
          icon: "mdi-cube",
          path: { path: "/##" },
        },
        {
          title: "Organization Info",
          icon: "mdi-domain",
          path: "#",
          items: [
            {
              title: "Basic Info",
              path: { path: "/organization-info", query: { s: "1" } },
            },
            {
              title: "NP Info",
              path: { path: "/organization-info", query: { s: "2" } },
            },
            {
              title: "NPO Info",
              path: { path: "/organization-info", query: { s: "3" } },
            },
            {
              title: "Documents Info",
              path: { path: "/organization-info", query: { s: "4" } },
            },
            {
              title: "History Info",
              path: { path: "/organization-info", query: { s: "5" } },
            },
            {
              title: "Details Info",
              path: { path: "/organization-info", query: { s: "6" } },
            },
            
          ],
        },
        {
          title: "Engagement Info",
          icon: "mdi-clipboard-check",
          path: "#",
          items: [
            {
              title: "Text Here",
              path: { path: "/engagement-info", query: { s: "1" } },
            },
            {
              title: "Text Here",
              path: { path: "/engagement-info", query: { s: "2" } },
            },
            {
              title: "Text Here",
              path: { path: "/engagement-info", query: { s: "3" } },
            },
            {
              title: "Text Here",
              path: { path: "/engagement-info", query: { s: "4" } },
            },
            {
              title: "Text Here",
              path: { path: "/engagement-info", query: { s: "5" } },
            },
            {
              title: "Text Here",
              path: { path: "/engagement-info", query: { s: "6" } },
            },
            
            ,
          ],
        },
        {
          title: "Nominated Personal",
          icon: "mdi-account-tie",
          path: "#",
          items: [
            {
              title: "Step 1",
              path: { path: "/something", query: { s: "1" } },
            },
            {
              title: "Step 2",
              path: { path: "/something", query: { s: "2" } },
            },
            {
              title: "Step 3",
              path: { path: "/something", query: { s: "3" } },
            },
          ],
        },
      ],
    };
  },
  mounted() {
    // vue router query
  },
};
</script>
<style lang="scss"></style>
