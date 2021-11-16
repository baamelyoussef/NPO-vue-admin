<template>
  <div class="fill-height fill-width d-flex align-center justify-center">
    <div>
      <v-card class="pa-8" height="auto" width="auto">
        <v-row align="start" justify="center">
          <v-img
            lazy-src="https://i.postimg.cc/X7mxW0Sm/logonpo.png"
            max-height="50px"
            max-width="50px"
            align="center"
            justify="center"
            src="https://i.postimg.cc/X7mxW0Sm/logonpo.png"
          ></v-img>
        </v-row>
        <v-card-title>Sign Up</v-card-title>
        <v-card-subtitle>
          Already have an account? <v-btn text>Sign in</v-btn>
        </v-card-subtitle>
        <v-form ref="form" v-model="valid" lazy-validation class="">
          <p class="mb-1">Name</p>
          <v-text-field class="mb-3" max-height="15"
            hide-details="auto"
            v-model="name"
            :rules="nameRules"
            outlined
            required
          ></v-text-field>
          <p class="mb-1">E-mail</p>
          <v-text-field class="mb-3" max-height="15"
            hide-details="auto"
            v-model="email"
            :rules="emailRules"
            outlined
            required
          ></v-text-field>
          <p class="mb-1">Company</p>
          <v-text-field hide-details="auto" class="mb-3" max-height="15" v-model="Company" outlined></v-text-field>
          <p class="mb-1">Password</p>
          <v-text-field
            hide-details="auto" class="mb-3" max-height="15"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            hint="At least 8 characters"
            outlined
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-row justify="center">
            <v-btn
              color="#F58840"
              class="pa-6 mt-8 w-c white--text"
              @click="validate"
              rounded
            >
              Create an account
            </v-btn>
          </v-row>
        </v-form>
      </v-card>
    </div>
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
  width: 19rem;
}

/* */
</style>
