<template>
  <div>
    <v-content class="overflow-hidden">
      <v-container
        fluid
        grid-list-xl
        class="fill-height pa-0"
        style="height: 100vh"
      >
        <v-layout row align-center>
          <v-row align="center" justify="center">
            <v-flex
              class="d-flex align-center"
              style="flex-direction: column"
              fill-height
            >
              <v-card title class="pa-8" height="490px" width="auto">
                <v-card-title>Sign Up</v-card-title>
                <v-card-subtitle>
                  Already have an account? <v-btn text>Sign in</v-btn>
                </v-card-subtitle>
                <v-form ref="form" v-model="valid" lazy-validation class="">
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  />

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  />
                  <v-text-field
                    v-model="Company"
                    :counter="10"
                    label="Company"
                  />
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  />
                  <v-row justify="center">
                    <v-btn color="gr" class="mt-6 w-c" @click="validate">
                      Create an account
                    </v-btn>
                  </v-row>
                </v-form>
              </v-card>
            </v-flex>
          </v-row>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: "Login",
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "md":
          return 1000;
      }
    },
  },
  components: {},
  data() {
    return {
      //form details
      show1: false,
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      company: "",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      //password details
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>
<style>
.bg-img {
  background: url("https://i.postimg.cc/fRY2Rxp7/priscilla-du-preez-n-NMBa7-Y1-Ymk-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.txt-c {
  color: aliceblue;
}
.w-c {
  width: 18rem;
}
</style>
