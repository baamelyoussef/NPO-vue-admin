<template>
  <v-container>
    <!-- create user image with name -->
    <div class="d-flex align-center my-7">
      
      <div>
        <h1 class="font-weight-bold text-4xl">NP Project</h1>
      
      </div>
    </div>

    <v-card>
      <v-card-text>
        <v-card outlined>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <h3 class="mb-3">Primary Informations</h3>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                  dense
                  v-model="name"
                  label="Name"
                  outlined
                  clearable
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                  dense
                  v-model="email"
                  label="Email"
                  outlined
                  clearable
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                  dense
                  v-model="phone"
                  label="Phone"
                  outlined
                  clearable
                  ></v-text-field>
                </v-col>

                
              </v-row>
              <h3 class="my-3">Address Informations</h3>

              <v-row>
                
                <v-col cols="12" md="4">
                  <v-text-field
                  dense
                  v-model="adress"
                  label="Adress"
                  outlined
                  clearable
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                  dense
                  v-model="city"
                  label="City"
                  outlined
                  clearable
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                  dense
                  v-model="state"
                  label="State"
                  outlined
                  clearable
                  ></v-text-field>
                </v-col>
              </v-row>

              
              <!-- sabmit button for saving changes and redirect to /dashboard -->
              <div class="d-flex align-center justify-center">
                <v-btn
                  large
                  rounded
                  color="primary"
                  type="submit"
                  :disabled="!valid"
                  @click="saveUser"
                >
                  Save
                  <v-icon right>mdi-check</v-icon>
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
        <!-- create user profile form -->
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      state:'Assam',
      city:'Silchar',
      adress:'Tarapur, Silchar, Assam 788007, India',
      name:'NP organization',
      email:'npo-org@mail.com',
      phone:'+91 7503907302',
      valid: true,
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        company: "",
        website: "",
      },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) =>
          (v && v.length <= 255) || "Name must be less than 255 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 6) || "Password must be at least 6 characters",
      ],
      passwordConfirmationRules: [
        (v) => !!v || "Confirm Password is required",
        (v) => (v && v === this.user.password) || "Passwords must match",
      ],
      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) =>
          (v && v.length <= 255) || "Phone must be less than 255 characters",
      ],
      addressRules: [
        (v) => !!v || "Address is required",
        (v) =>
          (v && v.length <= 255) || "Address must be less than 255 characters",
      ],
      cityRules: [
        (v) => !!v || "City is required",
        (v) =>
          (v && v.length <= 255) || "City must be less than 255 characters",
      ],
      stateRules: [
        (v) => !!v || "State is required",
        (v) =>
          (v && v.length <= 255) || "State must be less than 255 characters",
      ],
      zipRules: [
        (v) => !!v || "Zip is required",
        (v) => (v && v.length <= 255) || "Zip must be less than 255 characters",
      ],
      countryRules: [
        (v) => !!v || "Country is required",
        (v) =>
          (v && v.length <= 255) || "Country must be less than 255 characters",
      ],
      companyRules: [
        (v) => !!v || "Company is required",
        (v) =>
          (v && v.length <= 255) || "Company must be less than 255 characters",
      ],
      websiteRules: [
        (v) => !!v || "Website is required",
        (v) =>
          (v && v.length <= 255) || "Website must be less than 255 characters",
      ],
    };
  },
  methods: {
    saveUser() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
