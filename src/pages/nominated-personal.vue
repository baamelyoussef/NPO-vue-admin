<template>
  <v-container class="mt-7">
    <float />
    <v-card>
      <v-card-text>
        <v-tabs show-arrows v-model="tab">
          <v-tab>Nominated Personal details</v-tab>

          <!--Step #3-->
          <v-tab-item>
            <v-card outlined>
              <v-card-text>
                <v-form v-model="valid">
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr></tr>
                          </thead>
                          <tbody>
                            <template v-for="item in details5">
                              <tr
                                :key="item.name"
                                v-if="$vuetify.breakpoint.mdAndUp"
                              >
                                <td>{{ item.name }}</td>
                                <td>
                                  <v-textarea
                                    hide-details="auto"
                                    filled
                                    dense
                                    auto-grow
                                    outlined
                                    rows="2"
                                    row-height="20"
                                  ></v-textarea>
                                </td>
                              </tr>
                              <tr v-else :key="item.name">
                                <div class="mt-4">
                                  {{ item.name }}
                                </div>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  auto-grow
                                  outlined
                                  rows="2"
                                  row-height="20"
                                ></v-textarea>
                              </tr>
                            </template>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-col>
                  </v-row>
                </v-form>
                <v-row align="center" justify="center">
                  <div class="d-flex">
                    <div class="d-inline-flex flex-wrap ma-3">
                      <div class="d-flex mt-5 mr-3">
                        <v-btn large rounded color="primary" @click="tab--">
                          <v-icon left>mdi-arrow-left</v-icon>
                          Engagement Info
                        </v-btn>
                      </div>
                      <div class="d-flex mt-5 mr-3">
                        <v-btn
                          large
                          rounded
                          color="primary"
                          class="wall"
                          @click="tab--"
                        >
                          Save And Exit
                        </v-btn>
                      </div>
                      <div class="d-flex mt-5 mr-3">
                        <v-btn
                          large
                          rounded
                          color="primary"
                          class="wall"
                          @click="tab++"
                        >
                          Save And Continue<v-icon right
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                      </div>
                      <div class="d-flex mt-5">
                        <v-btn large rounded color="primary" @click="tab++">
                          Digital Signature
                          <v-icon right>mdi-arrow-right</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Float from "../components/Float.vue";
export default {
  components: { Float },
  data() {
    return {
      tab: 0,
      radioGroup: 1,
      radioGroup2: 1,
      radioGroup3: 1,
      radioGroup4: 1,
      items: ["Section 8 or 25 Company", "Trust", "Society"],
      itemsDomain: [
        "Education",
        "Women's empowerment",
        "Skilling",
        "Livelihood",
        "Health",
        "Others",
      ],
      itemsAcc: [
        "NGO Darpan",
        "Guidestar",
        "Charity Aid Foundation",
        "Others",
        "None",
      ],
      itemsSc: ["High", "Medium", "Low"],
      details5: [
        {
          name: "Name",
        },
        {
          name: "E-mail",
        },
        {
          name: "Mobile",
        },
        {
          name: "Educational Qualification",
        },
        {
          name: "Total Work Experience",
        },
        {
          name: "Vintage in Organisation",
        },
        {
          name: "Has Understanding of MIS",
        },
        {
          name: "Has good communication skills",
        },
        {
          name: "Has familiarity with tachnology esp. MS office,zoom,etc",
        },
        {
          name: "Has the ability to deal with stakeholder, get approval/take decision and influence others in the organisation to adopt the project improvements",
        },
      ],
    };
  },
  watch: {
    "$route.query.s": function (v) {
      this.tab = +v - 1;
    },
    tab(v) {
      this.$router.push({
        query: {
          s: +v + 1,
        },
      });
    },
  },
  mounted() {
    this.$route.query.s
      ? (this.tab = +this.$route.query.s - 1)
      : (this.tab = 0);
  },
};
</script>

<style lang="scss" scoped></style>
