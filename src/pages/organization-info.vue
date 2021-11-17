<template>
  <v-container class="mt-7">
    <v-tabs show-arrows v-model="tab">
      <v-tab>Step One</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Step Two</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Step Three</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Step Four</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Step Five</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Step Six</v-tab>

      <!-- step #1 -->
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Name of the Organization"
                    required
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Legal Name"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="Year of Establishment"
                    required
                  />
                </v-col>

                
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Regd Adress with state and pin code"
                    required
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="HO Address"
                  />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Website"
                    required
                  />
                </v-col>
                

                
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-select
                    dense
                    :items="items"
                    outlined
                    transition="scroll-y-transition"
                    append-icon="mdi-chevron-down"
                    label="Registered Legal Entity"
                    hide-details="auto"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="PAN Number"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="Registration Certificate Number"
                    required
                  />
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

      <!-- step #2 -->
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="80G Number"
                    required
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="12A Number"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="FCRA Number (if applicable)"
                    required
                  />
                </v-col>

                
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                <p>Renewed 80G,12A,FCRA per the new guidelines?</p>           
                <v-radio-group v-model="radioGroup" row>
                  <v-radio
                    label="Yes"
                    color="primary"
                    value="Yes"
                  ></v-radio>
                  <v-radio
                    label="No"
                    color="wall"
                    value="No"
                  ></v-radio>
                </v-radio-group>
                </v-col>

                <v-col cols="12" md="4">
                  <p>Availability of Audited Financial statements for previous 3 years?</p>           
                <v-radio-group v-model="radioGroup2" row>
                  <v-radio
                    label="Yes"
                    color="primary"
                    value="Yes"
                  ></v-radio>
                  <v-radio
                    label="No"
                    color="wall"
                    value="No"
                  ></v-radio>
                </v-radio-group>
                </v-col>
                <v-col cols="12" md="4">
                  <p>Compliant with Income Tax Return filing for previous 3 years?</p>           
                <v-radio-group v-model="radioGroup3" row>
                  <v-radio
                    label="Yes"
                    color="primary"
                    value="Yes"
                  ></v-radio>
                  <v-radio
                    label="No"
                    color="wall"
                    value="No"
                  ></v-radio>
                </v-radio-group>
                </v-col>

                
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-select
                    dense
                    :items="itemsDomain"
                    outlined
                    transition="scroll-y-transition"
                    append-icon="mdi-chevron-down"
                    label="Select the domain"
                    hide-details="auto"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="4">
                  <v-select
                    dense
                    :items="itemsAcc"
                    outlined
                    transition="scroll-y-transition"
                    append-icon="mdi-chevron-down"
                    label="Organization Accredited by "
                    hide-details="auto"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="4">
                  <p>Any litigation history against the organization ? If yes, please provide details</p>           
                <v-radio-group v-model="radioGroup4" row>
                  <v-radio
                    label="Yes"
                    color="primary"
                    value="Yes"
                  ></v-radio>
                  <v-radio
                    label="No"
                    color="wall"
                    value="No"
                  ></v-radio>
                </v-radio-group>
                <v-textarea
                  label="Details here"
                  auto-grow
                  outlined
                  rows="3"
                  row-height="25"
                  shaped
                ></v-textarea>
                </v-col>
                
              </v-row>
            </v-form>
            <div class="d-flex">
              <v-spacer>  </v-spacer>
            <div class="d-flex justify-end mt-5 mr-3">
              <v-btn large rounded color="primary" @click="tab--">
                <v-icon left>mdi-arrow-left</v-icon>Back
              </v-btn>
            </div>
            <div class="d-flex justify-end mt-5">
              <v-btn large rounded color="primary" @click="tab++">
                next
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- step #3 -->
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="4">
                  <p>Details of NPO Person filling the form :</p>
                  <v-textarea
                    class="mx-2"
                    label="Name"
                    rows="1"
                    prepend-icon="mdi-account-details"
              
                  ></v-textarea>
                  <v-textarea
                    class="mx-2"
                    label="Designation"
                    rows="1"
                    prepend-icon="mdi-information-outline"
                    
                  ></v-textarea>
                  <v-textarea
                    class="mx-2"
                    label="E-mail"
                    rows="1"
                    prepend-icon="mdi-email"
                    
                  ></v-textarea>
                  <v-textarea
                    class="mx-2"
                    label="Mobile"
                    rows="1"
                    prepend-icon="mdi-cellphone"
                    
                  ></v-textarea>
                </v-col>

                <v-col cols="12" md="4">
                  <p>Details of NPO Champion :</p>
                  <v-textarea
                    class="mx-2"
                    label="Name"
                    rows="1"
                    prepend-icon="mdi-account-details"
              
                  ></v-textarea>
                  <v-textarea
                    class="mx-2"
                    label="Designation"
                    rows="1"
                    prepend-icon="mdi-information-outline"
                    
                  ></v-textarea>
                  <v-textarea
                    class="mx-2"
                    label="E-mail"
                    rows="1"
                    prepend-icon="mdi-email"
                    
                  ></v-textarea>
                  <v-textarea
                    class="mx-2"
                    label="Mobile"
                    rows="1"
                    prepend-icon="mdi-cellphone"
                    
                  ></v-textarea>
                </v-col>

                <v-col cols="12" md="4">
                  <p>Deatils of NPO CEO/ED/Funder</p>
                  <v-textarea
                    class="mx-2"
                    label="Name"
                    rows="1"
                    prepend-icon="mdi-account-details"
              
                  ></v-textarea>
                  <v-textarea
                    class="mx-2"
                    label="Designation"
                    rows="1"
                    prepend-icon="mdi-information-outline"
                    
                  ></v-textarea>
                  <v-textarea
                    class="mx-2"
                    label="E-mail"
                    rows="1"
                    prepend-icon="mdi-email"
                    
                  ></v-textarea>
                  <v-textarea
                    class="mx-2"
                    label="Mobile"
                    rows="1"
                    prepend-icon="mdi-cellphone"
                    
                  ></v-textarea>
                </v-col>

                
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <p>Explain organization's origin,purpose and core activities. What is the social
                    problem you are addressing
                  </p>
                  <v-textarea
                    label="Explain here"
                    auto-grow
                    outlined
                    rows="3"
                    row-height="25"
                    shaped
                  ></v-textarea>
                </v-col>

                <v-col cols="12" md="4">
                  <p>Who are the direct and indirect beneficiaries of the organisation
                  </p>
                  <v-textarea
                    label="Explain here"
                    auto-grow
                    outlined
                    rows="3"
                    row-height="25"
                    shaped
                  ></v-textarea>
                </v-col>

                <v-col cols="12" md="4">
                  <p>What are the key qualitative impact indicators measured
                  </p>
                  <v-textarea
                    label="Explain here"
                    auto-grow
                    outlined
                    rows="3"
                    row-height="25"
                    shaped
                  ></v-textarea>
                </v-col>

                
              </v-row>
              <v-row>
                <v-col cols="12" md="12">
                  <p>Mention the SDG's impacted
                  </p>
                  <v-textarea
                    label="Mention here (if known)"
                    auto-grow
                    outlined
                    rows="3"
                    row-height="25"
                    shaped
                  ></v-textarea>
                </v-col>
                
              </v-row>
            </v-form>
            <div class="d-flex">
              <v-spacer>  </v-spacer>
            <div class="d-flex justify-end mt-5 mr-3">
              <v-btn large rounded color="primary" @click="tab--">
                <v-icon left>mdi-arrow-left</v-icon>Back
              </v-btn>
            </div>
            <div class="d-flex justify-end mt-5">
              <v-btn large rounded color="primary" @click="tab++">
                next
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- step #4 -->
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="12">
                  <v-row align="center" justify="center">    
                    <p>Please provide supporting documents with the form Organisational Funding details in Crors (Past and Projected)</p>
                  </v-row>
                  <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">
                              
                            </th>
                            <th class="text-left">
                              Past-2018-19
                            </th>
                            <th class="text-left">
                              Past2-2019-20
                            </th>
                            <th class="text-left">
                              CY2020-21 (Provisional)
                            </th>
                            <th class="text-left">
                              Projected-1 2021-22
                            </th>
                            <th class="text-left">
                              Projected-2023-24
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item in details"
                            :key="item.name"
                          >
                            <td>{{ item.name }}</td>
                            <td><v-file-input
                                  label="File input"
                                  outlined
                                  dense
                                ></v-file-input>
                            </td>
                            <td><v-file-input
                                  label="File input"
                                  outlined
                                  dense
                                ></v-file-input>
                            </td>
                            <td><v-file-input
                                  label="File input"
                                  outlined
                                  dense
                                ></v-file-input>
                            </td>
                            <td><v-file-input
                                  label="File input"
                                  outlined
                                  dense
                                ></v-file-input>
                            </td>
                            <td><v-file-input
                                  label="File input"
                                  outlined
                                  dense
                                ></v-file-input>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                </v-col>

                <v-col cols="12" md="12">
                  <v-row align="center" justify="center">    
                    <p>Please provide Committed and expected funding details in croces</p>
                  </v-row>
                  <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">
                              
                            </th>
                            <th class="text-left">
                              Projected-1 2021-22
                            </th>
                            <th class="text-left">
                              Projected-2022-23
                            </th>
                            <th class="text-left">
                              Projected-2023-24
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item in details2"
                            :key="item.name"
                          >
                            <td>{{ item.name }}</td>
                            <td><v-file-input
                                  label="File input"
                                  outlined
                                  dense
                                ></v-file-input>
                            </td>
                            <td><v-file-input
                                  label="File input"
                                  outlined
                                  dense
                                ></v-file-input>
                            </td>
                            <td><v-file-input
                                  label="File input"
                                  outlined
                                  dense
                                ></v-file-input>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                </v-col>

                <v-col cols="12" md="12">
                  <v-row align="center" justify="center" class="mb-2">    
                    <p>Please provide Committed and expected funding details in croces</p>
                  </v-row>
                  <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item in details3"
                            :key="item.name"
                          >
                            <td>{{ item.name }}</td>
                            <td><v-text-field
                                  outlined
                                  dense
                                ></v-text-field>
                            </td>
                            <td><v-text-field
                                  outlined
                                  dense
                                ></v-text-field>
                            </td>
                            <td><v-text-field
                                  outlined
                                  dense
                                ></v-text-field>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                </v-col>

                
              </v-row>
              
            </v-form>
            <div class="d-flex">
              <v-spacer>  </v-spacer>
            <div class="d-flex justify-end mt-5 mr-3">
              <v-btn large rounded color="primary" @click="tab--">
                <v-icon left>mdi-arrow-left</v-icon>Back
              </v-btn>
            </div>
            <div class="d-flex justify-end mt-5">
              <v-btn large rounded color="primary" @click="tab++">
                next
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- step #5 -->
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Name of the Organization"
                    required
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Legal Name"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="Year of Establishment"
                    required
                  />
                </v-col>

                
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="HO Address"
                    required
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Website"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-select
                    dense
                    :items="items"
                    outlined
                    transition="scroll-y-transition"
                    append-icon="mdi-chevron-down"
                    label="Registered Legal Entity"
                    hide-details="auto"
                  ></v-select>
                </v-col>

                
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Registration Certificate Number"
                    required
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="80G Address"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="12A Number"
                    required
                  />
                </v-col>
                
              </v-row>
            </v-form>
            <div class="d-flex">
              <v-spacer>  </v-spacer>
            <div class="d-flex justify-end mt-5 mr-3">
              <v-btn large rounded color="primary" @click="tab--">
                <v-icon left>mdi-arrow-left</v-icon>Back
              </v-btn>
            </div>
            <div class="d-flex justify-end mt-5">
              <v-btn large rounded color="primary" @click="tab++">
                next
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- step #2 -->
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Name of the Organization"
                    required
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Legal Name"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="Year of Establishment"
                    required
                  />
                </v-col>

                
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="HO Address"
                    required
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Website"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-select
                    dense
                    :items="items"
                    outlined
                    transition="scroll-y-transition"
                    append-icon="mdi-chevron-down"
                    label="Registered Legal Entity"
                    hide-details="auto"
                  ></v-select>
                </v-col>

                
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Registration Certificate Number"
                    required
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="80G Address"
                  />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="12A Number"
                    required
                  />
                </v-col>
                
              </v-row>
            </v-form>
            <div class="d-flex">
                            <v-spacer></v-spacer>

            <div class="d-flex justify-end mt-5 mr-3">
                <v-btn large rounded color="primary" @click="tab--">
                  <v-icon left>mdi-arrow-left</v-icon>Back
                </v-btn>
            </div>
            <div class="d-flex justify-end mt-5">
              <v-btn large rounded color="wall" class="white--text">
                Engagement Info
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
  data() {
    return {
      tab: 0,
      radioGroup: 1,
      radioGroup2: 1,
      radioGroup3: 1,
      radioGroup4: 1,
      items: ["Section 8 or 25 Company", "Trust", "Society"],
      itemsDomain: ["Education","Women's empowerment","Skilling","Livelihood","Health","Others"],
      itemsAcc: ["NGO Darpan","Guidestar","Charity Aid Foundation","Others","None"],
      details: [
          {
            name: 'Income',
          },
          {
            name: 'Expenditure',
          },
        ],
      details2: [
          {
            name: 'Committed funding',
          },
          {
            name: 'Expected funding',
          },
        ],
      details3: [
          {
            name: 'Type of donors (CSR, international grant,HN1)',
          },
          {
            name: 'Please provide names of significant donors',
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