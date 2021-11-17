<template>
  <v-container class="mt-7">
    <v-tabs show-arrows v-model="tab">
      <v-tab>Step One</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Step Two</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Step Three</v-tab>

      <!-- step #1 -->
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Name of the Organization"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Legal Name"
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="Year of Establishment"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="Rged Address with state and pin code"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="HO Address"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Website"
                  />
                </v-col>

                <v-col cols="12" md="3">
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

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="PAN Number"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Registration Certificate Number"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="80G Address"
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="12A Number"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
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
                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Name of the Organization"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Legal Name"
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="Year of Establishment"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="Rged Address with state and pin code"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="HO Address"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Website"
                  />
                </v-col>

                <v-col cols="12" md="3">
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

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="PAN Number"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Registration Certificate Number"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="80G Address"
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="12A Number"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
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

      <!-- step #3 -->
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Name of the Organization"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Legal Name"
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="Year of Establishment"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="Rged Address with state and pin code"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="HO Address"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="Website"
                  />
                </v-col>

                <v-col cols="12" md="3">
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

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="PAN Number"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="firstname"
                    outlined
                    label="Registration Certificate Number"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="lastname"
                    outlined
                    label="80G Address"
                  />
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    dense
                    hide-details="auto"
                    v-model="email"
                    outlined
                    label="12A Number"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3">
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
            </v-form>
            <!-- last form shouldn't have next button -->
            <!-- <div class="d-flex justify-end mt-5">
              <v-btn large rounded color="primary">
                next
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div> -->
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
      items: ["Section 8 or 25 Company", "Trust", "Society"],
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