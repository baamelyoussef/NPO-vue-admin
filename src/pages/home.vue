<template>
  <!-- <v-stepper v-model="e1"> -->
  <div>
    <div class="accent">
      <v-container>
        <v-tabs v-model="e1">
          <v-tab>Step One</v-tab>
          <v-tab>Step Two</v-tab>
          <v-tab>Step Three</v-tab>
          <v-tab-item>
            <v-card>
              <v-card-text>
                <AO />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>
                <AO />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>
                <AO />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-container>
    </div>
  </div>

  <!-- <v-stepper-items>
      <v-stepper-content step="1">
        <v-btn color="primary" @click="e1 = 2"> Next </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="white" height="auto"> </v-card>
        <v-btn text @click="e1 = e1 - 1"> Go back </v-btn>
        <v-btn color="primary" @click="e1 = 3"> Next </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="white" height="auto" elevation="7">
        </v-card>
        <v-btn text @click="e1 = e1 - 1"> Go back </v-btn>
        <v-btn color="primary" @click="e1 = 3"> Next Step </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper> -->
</template>

<script>
import AO from "./Forms/OBI/AO.vue";

export default {
  components: {
    AO,
  },
  data() {
    return {
      e1: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
