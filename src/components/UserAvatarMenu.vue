<template>
  <div>
    <v-menu
      content-class="mt-3"
      transition="scroll-y-transition"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="170"
      offset-y
      offset-x
      left
    >
      <template #activator="{ on, attrs }">
        <div v-ripple class="pa-1 rounded-pill" v-bind="attrs" v-on="on">
          <v-btn icon :color="color">
            <v-icon> mdi-account </v-icon>
          </v-btn>
        </div>
      </template>

      <v-card tile class="accent">
        <v-list class="py-2">
          <v-list-item>
            <v-list-item-subtitle class="d-flex flex-column">
              <p class="mb-1 black--text">Sign In As</p>
              <p class="secondary--text mb-1">email@email.com</p>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>

        <v-divider />

        <div v-for="(item, index) in menuItems" :key="index">
          <v-list dense>
            <v-list-item
              v-for="(t, i) in item"
              :key="i"
              @click="listMethod(t.code)"
              :link="t.to ? true : false"
              :to="t.to ? t.to : false"
            >
              <v-list-item-icon>
                <v-icon> {{ t.icon }} </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> {{ t.title }} </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action v-if="t.counter">
                <v-btn icon class="red" x-small dark style="font-size: 0.77rem">
                  6
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-divider v-if="index < menuItems.length - 1" />
        </div>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "UserAvatarMenu",
  props: {
    color: {
      type: String,
      default: "secondary",
    },
  },
  data() {
    return {
      menu: false,
      menuItems: [
        [
          {
            icon: "mdi-account",
            title: "Profile",
            to: "/profile",
          },
          {
            icon: "mdi-bell",
            title: "notification",
            counter: "2",
          },
        ],
        [
          {
            icon: "mdi-cog",
            title: "Setting",
          },
        ],
        [
          {
            icon: "mdi-exit-to-app",
            title: "Logout",
            code: "logout",
          },
        ],
      ],
    };
  },
  methods: {
    logout() {
      // try {
      //   this.$store.dispatch("auth2/logout");
      //   this.$router.push({ name: "login" });
      // } catch (e) {
      //   this.notify("No account details found.")
      //   console.log(e);
      // }
      // router push to login page
      this.$router.push({ name: "login" });
    },
    listMethod(code) {
      if (code === "logout") {
        this.logout();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
