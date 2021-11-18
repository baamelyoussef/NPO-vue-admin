<template>
  <v-container>
    <!-- create user image with name -->
    <div class="d-flex align-center my-7">
      <v-avatar size="110" class="mr-5">
        <img src="@/assets/img/brian-hughes.jpg" />
      </v-avatar>
      <div>
        <h1 class="font-weight-bold text-4xl">Brian Johnson</h1>
        <div class="d-flex align-center mt-1">
          <p class="caption ma-0">From London</p>
        </div>
      </div>
    </div>

    <v-card>
      <v-card-text>
        <v-card outlined>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.name"
                    :rules="nameRules"
                    label="Name"
                    required
                    autofocus
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.email"
                    :rules="emailRules"
                    label="Email"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.password"
                    :rules="passwordRules"
                    type="password"
                    label="Password"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.password_confirmation"
                    :rules="passwordConfirmationRules"
                    type="password"
                    label="Confirm Password"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.phone"
                    :rules="phoneRules"
                    label="Phone"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.address"
                    :rules="addressRules"
                    label="Address"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.city"
                    :rules="cityRules"
                    label="City"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.state"
                    :rules="stateRules"
                    label="State"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.zip"
                    :rules="zipRules"
                    label="Zip"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.country"
                    :rules="countryRules"
                    label="Country"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.company"
                    :rules="companyRules"
                    label="Company"
                    required
                  />
                </v-col>

                <v-col cols="12" md="3" lg="2">
                  <v-text-field
                    dense
                    outlined
                    v-model="user.website"
                    :rules="websiteRules"
                    label="Website"
                    required
                  />
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
