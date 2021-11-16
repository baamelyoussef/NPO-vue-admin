<template>
  <div>
    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            hide-details="auto"
            v-model="firstname"
            outlined
            label="Name of the Organization"
            required
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            hide-details="auto"
            v-model="lastname"
            outlined
            label="Legal Name"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            hide-details="auto"
            v-model="email"
            outlined
            label="Year of Establishment"
            required
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
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
            hide-details="auto"
            v-model="firstname"
            outlined
            label="HO Address"
            required
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            hide-details="auto"
            v-model="lastname"
            outlined
            label="Website"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            hide-details="auto"
            :items="items"
            label="Registered Legal Entity"
            outlined
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
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
            hide-details="auto"
            v-model="firstname"
            outlined
            label="Registration Certificate Number"
            required
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            hide-details="auto"
            v-model="lastname"
            outlined
            label="80G Address"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            hide-details="auto"
            v-model="email"
            outlined
            label="12A Number"
            required
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            hide-details="auto"
            v-model="email"
            outlined
            label="FCRA Number (if applicable)"
            required
          />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script>
export default {
  name: "AO",
  data() {
    return {
      e6: 1,
      items: ["Section 8 or 25 Company", "Trust", "Society"],
    };
  },
};
</script>
<style lang=""></style>
