<template>
  <v-container class="mt-7">
    <v-tabs show-arrows v-model="tab">
      <v-tab>More NPO details</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Beneficiary details</v-tab>
      

      <!-- step #1 -->
      <v-tab-item>
        <v-card>
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
                        <tr v-for="item in details" :key="item.name">
                          <td>{{ item.name }}</td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>

                <v-col cols="12" md="12">
                  <v-row align="center"  class="mb-4" justify="center">
                    <p class="mb-1 secondary--text">
                      Please provide the details of the program or intervention or project where MIS restructuring is needed. <br> Since this is a short term engagement we can take up to 1 core program
                    </p>
                  </v-row>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in details2" :key="item.name">
                          <td>{{ item.name }}</td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>                
              </v-row>
              
            </v-form>
            <div class="d-flex justify-end mt-5">
              <v-btn large rounded color="primary" @click="tab++">
                next
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!--Step #2-->
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="12">
                  <v-row align="center"  class="mb-4" justify="center">
                    <p class="mb-1 secondary--text">
                      Program total beneficary impact details
                    </p>
                  </v-row>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Impact indicator-1</th>
                          <th class="text-left">Past- 2018-19</th>
                          <th class="text-left">Past- 2019-20</th>
                          <th class="text-left">CY 2020-21(provisional)</th>
                          <th class="text-left">Projected- 2021-22</th>
                          <th class="text-left">Projected- 2022-23</th>
                          <th class="text-left">Projected- 2023-24</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr >
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>

                <v-col cols="12" md="12">
                  <v-row align="center"  class="mb-4" justify="center">
                    <p class="mb-1 secondary--text">
                      Explain the MIS process(as per questions in table below)
                    </p>
                  </v-row>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Category</th>
                          <th class="text-left">How (Manual or tool)</th>
                          <th class="text-left">Who collects</th>
                          <th class="text-left">Frequency</th>
                          <th class="text-left">Type of data collected</th>
                          <th class="text-left">Challenges (Languages, internet)</th>
                          <th class="text-left">Time taken</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in details3" :key="item.name">
                          <td>{{ item.name }}</td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                          <td>
                            <v-textarea
                              filled
                              dense
                              auto-grow
                              outlined
                              rows="2"
                              row-height="20"
                            ></v-textarea>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>                
              </v-row>
              
            </v-form>
            <div class="d-flex">
              <v-spacer> </v-spacer>
              <div class="d-flex justify-end mt-5 mr-3">
                <v-btn large rounded color="primary" @click="tab--">
                  <v-icon left>mdi-arrow-left</v-icon>Back
                </v-btn>
              </div>
              <div class="d-flex justify-end mt-5">
                <v-btn large rounded color="primary" @click="tab++">
                  NP Details
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  name: "engagement-info",
  data() {
    return {
      tab: 0,
      details: [
        {
          name: "Reason for partnering with",
        },
        {
          name: "What are the key challenges you are facing with the current MIS process",
        },
        {
          name: "Why is transforming MIS important for your program",
        },
        {
          name: "How will this project have an impact on end beneficiaries",
        },
        {
          name: "No of MIS resources in the organisation (mention full time, part time, shared)",
        },
        {
          name: "No of different Programs, Projects run by the Organisation",
        },
      ],
      details2: [
        {
          name: "Program/Project Name",
        },
        {
          name: "Program/Project Budget",
        },
        {
          name: "Program/Project Start and End Date",
        },
        {
          name: "Overview of the program",
        },
        {
          name: "Key Impact indicators of the program/Project",
        },
        {
          name: "End Beneficiary",
        },
      ],
      details3: [
        {
          name: "Dato Collection",
        },
        {
          name: "Data consolidation",
        },
        {
          name: "Data Quality, governance,and security",
        },
        {
          name: "Data Reporting / Dashboard creation",
        },
        {
          name: "Generating insights from the report",
        }
      ],
      details4: [
        {
          name: "What is the support you need from for MIS re-engineering",
        },
        {
          name: "What is your automation requirement for excel based solution,if any",
        },
        {
          name: "WHat are the success indicators of projects",
        },
        {
          name: "Mention the key risks for achieving the planned outcomes and impacts of te project and how do these factors affect the project",
        },
        {
          name: "What are the things that can be done/ planned to minimize or mitigate the impact of above-mentioned risk factors ",
        },
        {
          name: "How do you plan to sustain the MIS solution designed by (licence cost, maintenance, enhancement, resources, etc)",
        }
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
