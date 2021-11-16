<template>
  <v-container class="mt-7">
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
