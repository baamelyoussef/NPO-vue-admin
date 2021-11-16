<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
        editable
      >
        About your organization
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
        editable
      >
        Name of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" editable>
        Name of step 3
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="white"
          height="auto"
        >
        <AO/>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Next
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="white"
          height="auto"
        >
        
        
        </v-card>
        <v-btn
          text
          @click="e1 =e1-1"
        >
          Go back
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Next
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="white"
          height="auto"
          elevation="7"
        >
        
        
        </v-card>
        <v-btn
          text
          @click="e1 =e1-1"
        >
          Go back
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 =3"
        >
          Next Step
        </v-btn>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import AO from './Forms/OBI/AO.vue'

export default {
  components:{
    AO
  },
  data () {
      return {
        e1: 1,
      }
    },
};
</script>

<style lang="scss" scoped></style>
