<template>
  <div>
    <v-container class="mt-7">
      <float />
      <v-card>
        <v-card-text>
          <v-tabs show-arrows v-model="tab" fixed-tabs>
            <v-tab>Basic Info</v-tab>
            <div class="dash"></div>
            <v-tab>NP Info</v-tab>
            <div class="dash"></div>
            <v-tab>NPO Info</v-tab>
            <div class="dash"></div>
            <v-tab>Documents Info</v-tab>
            <div class="dash"></div>
            <v-tab>History Info</v-tab>
            <div class="dash"></div>
            <v-tab>Details Info</v-tab>

            <!-- step #1 -->
            <v-tab-item>
              <v-card outlined>
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
                  <v-row align="center" justify="center">
                    <div class="d-flex">
                      <div class="d-inline-flex flex-wrap ma-3">
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
                            next
                            <v-icon right>mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <!-- step #2 -->
            <v-tab-item>
              <v-card outlined>
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
                        <p class="mb-1 secondary--text">
                          Renewed 80G,12A,FCRA per the new guidelines?
                        </p>
                        <v-radio-group v-model="radioGroup" row>
                          <v-radio
                            label="Yes"
                            color="primary"
                            value="Yes"
                          ></v-radio>
                          <v-radio
                            label="No"
                            color="primary"
                            value="No"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>

                      <v-col cols="12" md="4">
                        <p class="mb-1 secondary--text">
                          Availability of Audited Financial statements for
                          previous 3 years?
                        </p>
                        <v-radio-group v-model="radioGroup2" row>
                          <v-radio
                            label="Yes"
                            color="primary"
                            value="Yes"
                          ></v-radio>
                          <v-radio
                            label="No"
                            color="primary"
                            value="No"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="12" md="4">
                        <p class="mb-1 secondary--text">
                          Compliant with Income Tax Return filing for previous 3
                          years?
                        </p>
                        <v-radio-group v-model="radioGroup3" row>
                          <v-radio
                            label="Yes"
                            color="primary"
                            value="Yes"
                          ></v-radio>
                          <v-radio
                            label="No"
                            color="primary"
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
                        <p class="mb-1 secondary--text">
                          Any litigation history against the organization ? If
                          yes, please provide details
                        </p>
                        <v-radio-group v-model="radioGroup4" row>
                          <v-radio
                            label="Yes"
                            color="primary"
                            value="Yes"
                          ></v-radio>
                          <v-radio
                            label="No"
                            color="primary"
                            value="No"
                          ></v-radio>
                        </v-radio-group>
                        <v-textarea
                          label="Details here"
                          auto-grow
                          outlined
                          rows="3"
                          row-height="25"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-form>
                  <v-row align="center" justify="center">
                    <div class="d-flex">
                      <div class="d-inline-flex flex-wrap ma-3">
                        <div class="d-flex mt-5 mr-3">
                          <v-btn large rounded color="primary" @click="tab--">
                            <v-icon left>mdi-arrow-left</v-icon>
                            Back
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
                            next
                            <v-icon right>mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <!-- step #3 -->
            <v-tab-item>
              <v-card outlined>
                <v-card-text>
                  <v-form v-model="valid">
                    <v-row class="d-none d-md-flex pt-4">
                      <v-col cols="4" md="4">
                        <p class="mb-n2 secondary--text ml-10">
                          Details of NPO Person filling the form :
                        </p>
                      </v-col>
                      <v-col cols="4" md="4">
                        <p class="mb-n2 secondary--text ml-10">
                          Details of NPO Champion :
                        </p>
                      </v-col>
                      <v-col cols="4" md="4">
                        <p class="mb-n2 secondary--text ml-10">
                          Details of NPO CEO/ED/Funder
                        </p>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="4">
                        <p class="mb-2 secondary--text ml-10 d-md-none">
                          Details of NPO Person filling the form :
                        </p>
                        <v-text-field
                          class="mx-2"
                          label="Name"
                          outlined
                          dense
                          prepend-icon="mdi-account-details"
                        ></v-text-field>
                        <v-text-field
                          class="mx-2"
                          label="Designation"
                          outlined
                          dense
                          prepend-icon="mdi-information-outline"
                        ></v-text-field>
                        <v-text-field
                          class="mx-2"
                          label="E-mail"
                          outlined
                          dense
                          prepend-icon="mdi-email"
                        ></v-text-field>
                        <v-text-field
                          class="mx-2"
                          label="Mobile"
                          outlined
                          dense
                          prepend-icon="mdi-cellphone"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <p class="mb-2 secondary--text ml-10 d-md-none">
                          Details of NPO Champion :
                        </p>
                        <v-text-field
                          class="mx-2"
                          label="Name"
                          outlined
                          dense
                          prepend-icon="mdi-account-details"
                        ></v-text-field>
                        <v-text-field
                          class="mx-2"
                          label="Designation"
                          outlined
                          dense
                          prepend-icon="mdi-information-outline"
                        ></v-text-field>
                        <v-text-field
                          class="mx-2"
                          label="E-mail"
                          outlined
                          dense
                          prepend-icon="mdi-email"
                        ></v-text-field>
                        <v-text-field
                          class="mx-2"
                          label="Mobile"
                          outlined
                          dense
                          prepend-icon="mdi-cellphone"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <p class="mb-2 secondary--text ml-10 d-md-none">
                          Details of NPO CEO/ED/Funder
                        </p>
                        <v-text-field
                          class="mx-2"
                          label="Name"
                          outlined
                          dense
                          prepend-icon="mdi-account-details"
                        ></v-text-field>
                        <v-text-field
                          class="mx-2"
                          label="Designation"
                          outlined
                          dense
                          prepend-icon="mdi-information-outline"
                        ></v-text-field>
                        <v-text-field
                          class="mx-2"
                          label="E-mail"
                          outlined
                          dense
                          prepend-icon="mdi-email"
                        ></v-text-field>
                        <v-text-field
                          class="mx-2"
                          label="Mobile"
                          outlined
                          dense
                          prepend-icon="mdi-cellphone"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="4">
                        <p class="secondary--text" style="margin-bottom: 6px">
                          Explain organization's origin,purpose and core
                          activities. What is the social problem you are
                          addressing
                        </p>
                        <v-textarea
                          label="Explain here"
                          auto-grow
                          outlined
                          rows="3"
                          row-height="25"
                        ></v-textarea>
                      </v-col>

                      <v-col cols="12" md="4">
                        <p class="mb-1 secondary--text mb-md-7">
                          Who are the direct and indirect beneficiaries of the
                          organisation
                        </p>
                        <v-textarea
                          label="Explain here"
                          auto-grow
                          outlined
                          rows="3"
                          row-height="25"
                        ></v-textarea>
                      </v-col>

                      <v-col cols="12" md="4">
                        <p class="mb-1 secondary--text mb-md-7">
                          What are the key qualitative impact indicators
                          measured
                        </p>
                        <v-textarea
                          label="Explain here"
                          auto-grow
                          outlined
                          rows="3"
                          row-height="25"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="12">
                        <p class="mb-2 secondary--text">
                          Mention the SDG's impacted
                        </p>
                        <v-textarea
                          label="Mention here (if known)"
                          auto-grow
                          outlined
                          rows="3"
                          row-height="25"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-form>
                  <v-row align="center" justify="center">
                    <div class="d-flex">
                      <div class="d-inline-flex flex-wrap ma-3">
                        <div class="d-flex mt-5 mr-3">
                          <v-btn large rounded color="primary" @click="tab--">
                            <v-icon left>mdi-arrow-left</v-icon>
                            Back
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
                            next
                            <v-icon right>mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <!-- step #4 -->
            <v-tab-item>
              <v-card outlined>
                <v-card-text>
                  <v-form v-model="valid">
                    <v-row>
                      <v-col cols="12" md="12">
                        <v-row align="center" justify="center" class="pt-4">
                          <p class="mb-6 mx-2 secondary--text">
                            Please provide supporting documents with the form
                            Organisational Funding details in Crors (Past and
                            Projected)
                          </p>
                        </v-row>
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left"></th>
                                <th class="text-left">Past-2018-19</th>
                                <th class="text-left">Past2-2019-20</th>
                                <th class="text-left">
                                  CY2020-21 (Provisional)
                                </th>
                                <th class="text-left">Projected-1 2021-22</th>
                                <th class="text-left">Projected-2023-24</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in details" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>
                                  <v-file-input
                                    hide-details="auto"
                                    label="File input"
                                    outlined
                                    dense
                                  ></v-file-input>
                                </td>
                                <td>
                                  <v-file-input
                                    hide-details="auto"
                                    label="File input"
                                    outlined
                                    dense
                                  ></v-file-input>
                                </td>
                                <td>
                                  <v-file-input
                                    hide-details="auto"
                                    label="File input"
                                    outlined
                                    dense
                                  ></v-file-input>
                                </td>
                                <td>
                                  <v-file-input
                                    hide-details="auto"
                                    label="File input"
                                    outlined
                                    dense
                                  ></v-file-input>
                                </td>
                                <td>
                                  <v-file-input
                                    hide-details="auto"
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
                        <v-row align="center" justify="center" class="pt-4">
                          <p class="mb-6 mx-2 secondary--text">
                            Please provide Committed and expected funding
                            details in croces
                          </p>
                        </v-row>
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left"></th>
                                <th class="text-left">Projected-1 2021-22</th>
                                <th class="text-left">Projected-2022-23</th>
                                <th class="text-left">Projected-2023-24</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in details2" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>
                                  <v-file-input
                                    hide-details="auto"
                                    label="File input"
                                    outlined
                                    dense
                                  ></v-file-input>
                                </td>
                                <td>
                                  <v-file-input
                                    hide-details="auto"
                                    label="File input"
                                    outlined
                                    dense
                                  ></v-file-input>
                                </td>
                                <td>
                                  <v-file-input
                                    hide-details="auto"
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
                        <v-row
                          align="center"
                          justify="center"
                          class="mb-2 pt-2"
                        >
                          <p class="mb-6 mx-2 secondary--text">
                            Please provide Committed and expected funding
                            details in croces
                          </p>
                        </v-row>
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr></tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in details3" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    outlined
                                    dense
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    outlined
                                    dense
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
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
                  <v-row align="center" justify="center">
                    <div class="d-flex">
                      <div class="d-inline-flex flex-wrap ma-3">
                        <div class="d-flex mt-5 mr-3">
                          <v-btn large rounded color="primary" @click="tab--">
                            <v-icon left>mdi-arrow-left</v-icon>
                            Back
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
                            next
                            <v-icon right>mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <!-- step #5 -->
            <v-tab-item>
              <v-card outlined>
                <v-card-text>
                  <v-form v-model="valid">
                    <v-row>
                      <v-col cols="12" md="12">
                        <v-row
                          align="center"
                          justify="center"
                          class="mb-2 pt-4"
                        >
                          <p class="mb-6 mx-2 secondary--text">
                            Organisational Impact/ End beneficiary quantitative
                            details (Past and Projected)
                          </p>
                        </v-row>
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left"></th>
                                <th class="text-left">Past- 2018-19</th>
                                <th class="text-left">Past2- 2019-20</th>
                                <th class="text-left">
                                  CY 2020-21 (Provisional)
                                </th>
                                <th class="text-left">Projected-1 2021-22</th>
                                <th class="text-left">Projected- 2022-23</th>
                                <th class="text-left">Projected- 2013-24</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in details4" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    outlined
                                    dense
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    outlined
                                    dense
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    outlined
                                    dense
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    outlined
                                    dense
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    outlined
                                    dense
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    outlined
                                    dense
                                  ></v-text-field>
                                </td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-col>

                      <v-col cols="12" md="12">
                        <v-row
                          align="center"
                          justify="center"
                          class="mb-2 pt-5"
                        >
                          <p class="mb-6 mx-2 secondary--text">
                            Provide names of states in wich you have project
                            offices in India
                          </p>
                        </v-row>
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">City/District</th>
                                <th class="text-left">State</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in details4" :key="item.name">
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    outlined
                                    dense
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    outlined
                                    dense
                                  ></v-text-field>
                                </td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-col>

                      <v-col cols="12" md="12">
                        <v-row align="center" justify="center">
                          <p class="mb-6 mx-2 secondary--text">
                            Organisational employee details (as of last month or
                            Qtr)
                          </p>
                        </v-row>
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">Level</th>
                                <th class="text-left">Full time employees</th>
                                <th class="text-left">
                                  Part-time/Volunteers/etc
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in details5" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    dense
                                    outlined
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    dense
                                    outlined
                                  ></v-text-field>
                                </td>
                              </tr>
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
                            Back
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
                            next
                            <v-icon right>mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <!-- step #6 -->
            <v-tab-item>
              <v-card outlined>
                <v-card-text>
                  <v-form v-model="valid">
                    <v-row>
                      <v-col cols="12" md="12">
                        <v-row align="center" justify="center" class="pt-4">
                          <p class="mb-6 mx-2 secondary--text">
                            Organisational Risk Details
                          </p>
                        </v-row>
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">Category</th>
                                <th class="text-left">Scale</th>
                                <th class="text-left">Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in details6" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>
                                  <v-select
                                    dense
                                    :items="itemsSc"
                                    outlined
                                    transition="scroll-y-transition"
                                    label="Choose Scale"
                                    hide-details="auto"
                                  ></v-select>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    dense
                                    outlined
                                  ></v-text-field>
                                </td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-col>

                      <v-col cols="12" md="12">
                        <v-row align="center" justify="center" class="pt-4">
                          <p class="mb-6 mx-2 secondary--text">
                            Organisational IT infrastructure availability
                            details
                          </p>
                        </v-row>
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">Category</th>
                                <th class="text-left">At Office</th>
                                <th class="text-left">Field Level</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in details5" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    dense
                                    outlined
                                  ></v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    hide-details="auto"
                                    dense
                                    outlined
                                  ></v-text-field>
                                </td>
                              </tr>
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
                            Back
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
                            Engagement Info
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
  </div>
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
      details: [
        {
          name: "Income",
        },
        {
          name: "Expenditure",
        },
      ],
      details2: [
        {
          name: "Committed funding",
        },
        {
          name: "Expected funding",
        },
      ],
      details3: [
        {
          name: "Type of donors (CSR, international grant,HN1)",
        },
        {
          name: "Please provide names of significant donors",
        },
      ],
      details4: [
        {
          name: "Education-Number of students",
        },
        {
          name: "Livelihood Development - Number of patients",
        },
        {
          name: "Health-Number of patients",
        },
        {
          name: "Skilling and employability - Number of youth",
        },
        {
          name: "Others - Number of beneficiaries",
        },
      ],
      details5: [
        {
          name: "Senior Management",
        },
        {
          name: "Middle Management",
        },
        {
          name: "Field team",
        },
        {
          name: "Support Staff (Admin,IT,Finance,HR)",
        },
        {
          name: "Total",
        },
      ],
      details6: [
        {
          name: "Program Delivery (Covid, geographical terrain,etc)",
        },
        {
          name: "Funding (Regulatory, FCRA, etc)",
        },
        {
          name: "Others",
        },
      ],
      details7: [
        {
          name: "Computers/Laptop/Tablets/Mobile devices",
        },
        {
          name: "Internet",
        },
        {
          name: "Organization email domain (eg. xyz@ngodomain.com; xyz@gmail.com)",
        },
        {
          name: "Online video call tools used",
        },
        {
          name: "Accounting Software",
        },
        {
          name: "ERP",
        },
        {
          name: "Project Mangement Tools",
        },
        {
          name: "HR Software",
        },
        {
          name: "Data Collection Tools",
        },
        {
          name: "Data Reporting Tools/Software",
        },
        {
          name: "Donor Reporting Tools",
        },
        {
          name: "Others",
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
