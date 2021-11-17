<template>
  <v-container class="mt-7">
    <v-tabs show-arrows v-model="tab">
      <v-tab>Text Here</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Text Here</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Text Here</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Text Here</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Text Here</v-tab>
      <v-icon>mdi-chevron-right</v-icon>
      <v-tab>Text Here</v-tab>

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
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  name: "engagement-info",
  data() {
    return {
      tab: 0,
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
