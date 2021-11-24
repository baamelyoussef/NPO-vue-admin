<template>
  <div>
    <v-app-bar fixed app short class="shadow">
      <!-- color="wall" -->
      <v-app-bar-nav-icon color="text" @click.stop="toggleDrawer" />
      <router-link to="/">
        <v-img
          max-height="40px"
          max-width="40px"
          align="center"
          justify="center"
          class="my-2"
          src="@/assets/img/logo.png"
        ></v-img>
      </router-link>
      <v-spacer />
      <h4>{{ $dayjs().format("MMM-DD-YYYY") }}</h4>
      <!-- <v-btn icon color="text" class="mx-1">
        <v-icon> mdi-apps </v-icon>
      </v-btn>
      <v-btn icon color="text">
        <v-icon> mdi-clipboard-arrow-down </v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="wall"
      :mini-variant="mini"
      mini-variant-width="80"
      :expand-on-hover="mini"
    >
      <v-card dark tile flat class="wall">
        <template v-if="!mini">
          <div class="d-flex justify-end pa-4 pb-0">
            <user-avatar-menu />
          </div>
          <div class="d-flex flex-column align-center text-center mb-2">
            <v-img
              max-height="96px"
              max-width="96px"
              class="my-6"
              src="@/assets/img/logo.png"
            />
            <h4 style="font-size: 14px">NP project</h4>
            <div class="caption secondary--text">email@email.com</div>
          </div>
        </template>
        <v-list rounded dense>
        <v-subheader>Dashboard</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            to="/"
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

      <!---->
      <v-list  dense>
                <v-subheader>DIY (Do It Yourself) Projects</v-subheader>
        <v-list-group
          :value="true"
          prepend-icon="mdi-domain"
        >
          <template v-slot:activator>
            <v-list-item-title>Project Information</v-list-item-title>
          </template>
  
          <v-list-group
            :value="true"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Organization Information</v-list-item-title>
              </v-list-item-content>
            </template>
            <div v-for="(item, i) in Oilinks" :key="i" cl>

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
            </div>
          </v-list-group>
  
          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Project Scope</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <div v-for="(item, i) in Eolinks" :key="i" cl>

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
            </div>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>MnI</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <div v-for="(item, i) in  Mnilinks" :key="i" cl>

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
            </div>
          </v-list-group>
        </v-list-group>

        
        <v-list-group
          :value="true"
          prepend-icon="mdi-account-settings"
        >
          <template v-slot:activator>
            <v-list-item-title>MOU</v-list-item-title>
          </template>
  
          <v-list-group
            :value="true"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon], i) in npo2"
              :key="i"
              link
              dense
              >
              
              <v-list-item-title v-text="title"></v-list-item-title>
              <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
              
            </v-list-item>
          </v-list-group>
  
          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon], i) in cruds"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>

      <!---->
      <v-list  dense>
                <v-subheader>DEEP Projects</v-subheader>
        
      
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
      mini: false,
      drawer: true,
      Oilinks:[
        {
          title: "Organization Info",
          icon: "mdi-domain",
          path: { path: "/organization-info", query: { s: "1" } },
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
      ],
      Eolinks:[
        {
          title: "Engagement Info",
          icon: "mdi-clipboard-check",
          path: { path: "/engagement-info", query: { s: "1" } },
          items: [
            {
              title: "More NPO details",
              path: { path: "/engagement-info", query: { s: "1" } },
            },
            {
              title: "Beneficiary details",
              path: { path: "/engagement-info", query: { s: "2" } },
            },
          ],
        },
      ],
      Mnilinks:[
        {
          title: "Nominated Personal",
          icon: "mdi-account-tie",
          path: { path: "/nominated-personal", query: { s: "1" } },
          items: [
            {
              title: "NP details",
              path: { path: "/nominated-personal", query: { s: "1" } },
            },
          ],
        },
        
      ],
      links: [
        {
          title: "Dashboard",
          icon: "mdi-view-carousel",
          path: { path: "/" },
        },
        {
          title: "Beneficiary",
          icon: "mdi-handshake",
          path: { path: "/beneficiary", query: { s: "1" } },
          items: [
            {
              title: "Basic Info",
              path: { path: "/beneficiary", query: { s: "1" } },
            }
          ],
        },
        {
          title: "Digital Signature",
          icon: "mdi-file-sign",
          path: { path: "/sign", query: { s: "1" } },
          items: [
            {
              title: "Signature Form",
              path: { path: "/sign", query: { s: "1" } },
            }
          ],
        },

        ////DEEP LINKS
        {
          title: "Govt. Engamement",
          icon: "mdi-office-building-cog",
          path: { path: "/financial-proc", query: { s: "1" } },
          items: [
            {
              title: "Financial Processes",
              path: { path: "/financial-proc", query: { s: "1" } },
            },
            {
              title: "HR",
              path: { path: "/financial-proc", query: { s: "2" } },
            },
            {
              title: "Legal",
              path: { path: "/financial-proc", query: { s: "3" } },
            },
            {
              title: "Admin Processes",
              path: { path: "/financial-proc", query: { s: "4" } },
            },
            {
              title: "Data Manag. Processes",
              path: { path: "/financial-proc", query: { s: "5" } },
            },
            {
              title: "Programs & Operations",
              path: { path: "/financial-proc", query: { s: "6" } },
            },
          ],
        },
        
        {
          title: "General Info",
          icon: "mdi-cellphone-information",
          path: { path: "/general-info", query: { s: "1" } },
          items: [
            {
              title: "Informations",
              path: { path: "/general-info", query: { s: "1" } },
            },
          ],
        },
        {
          title: "Project Details",
          icon: "mdi-projector-screen",
          path: { path: "/project-details", query: { s: "1" } },
          items: [
            {
              title: "Questionnaire",
              path: { path: "/project-details", query: { s: "1" } },
            },
            {
              title: "Related Info",
              path: { path: "/project-details", query: { s: "2" } },
            }
          ],
        },
        {
          title: "Engagement Scope",
          icon: "mdi-account-group",
          path: { path: "/engage-scope", query: { s: "1" } },
          items: [
            {
              title: "Basic Info",
              path: { path: "/engage-scope", query: { s: "1" } },
            }
          ],
        },
        {
          title: "Monitoring ",
          icon: "mdi-playlist-edit",
          path: { path: "/m-v", query: { s: "1" } },
          items: [
            {
              title: "Basic Info",
              path: { path: "/m-v", query: { s: "1" } },
            },
            {
              title: "Related Info",
              path: { path: "/m-v", query: { s: "2" } },
            }
          ],
        },
        {
          title: "Funding Details",
          icon: "mdi-hand-coin",
          path: { path: "/funding-details", query: { s: "1" } },
          items: [
            {
              title: "Basic Info",
              path: { path: "/funding-details", query: { s: "1" } },
            }
          ],
        },
        {
          title: "Org. Declaration",
          icon: "mdi-draw-pen",
          path: { path: "/signd", query: { s: "1" } },
          items: [
            {
              title: "Signature Form",
              path: { path: "/signd", query: { s: "1" } },
            }
          ],
        },
      ],
      /////
      items: [
      { text: 'Dashboard', icon: 'mdi-view-carousel' },
      
    ],
    npo1: [
      ['TEST', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    npo2: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
    };
  },
  methods: {
    toggleDrawer() {
      if (this.$vuetify.breakpoint.mdAndDown) {
        this.mini = false;
        this.drawer = !this.drawer;
      } else {
        this.drawer = true;
        this.mini = !this.mini;
      }
    },
  },
};
</script>
<style lang="scss">
.item-link {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
