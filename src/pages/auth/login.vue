<template>
  <div>
    <v-content class="overflow-hidden">
      <v-container
        fluid
        grid-list-xl
        class="fill-height pa-0"
        style="height: calc(100vh - 56px)"
      >
        <v-app-bar fixed app short class="shadow white">
          <router-link to="/">
            <v-img
              max-height="40px"
              max-width="40px"
              align="center"
              justify="center"
              class="my-2"
              src="@/assets/img/logo.png"
            ></v-img>
          </router-link>
        </v-app-bar>
        <v-layout row align-center justify-center>
          <v-row align="center" justify="center">
            <v-flex
              class="d-flex align-center"
              style="flex-direction: column"
              fill-height
            >
              <v-card title class="pa-8 s-c" height="auto" width="auto">
                <v-row align="start" justify="center">
                  <v-img
                    max-height="90px"
                    max-width="90px"
                    align="center"
                    justify="center"
                    class="my-2"
                    src="@/assets/img/logo.png"
                  ></v-img>
                </v-row>
                <v-card-text class="pa-0">
                  <div class="display-1 font-weight-medium my-5">Sign In</div>
                  <v-form>
                    <!-- <p>E-mail</p> -->
                    <v-text-field
                      label="E-mail"
                      dense
                      v-model="email"
                      :rules="emailRules"
                      outlined
                      required
                    ></v-text-field>
                    <!-- <p>Password</p> -->
                    <v-text-field
                      label="Password"
                      dense
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      outlined
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-row justify="center">
                      <v-btn
                        to="/"
                        color="#F58840"
                        class="pa-6 mt-8 w-c white--text"
                        @click="validate"
                        rounded
                      >
                        Sign In
                      </v-btn>
                    </v-row>
                  </v-form>
                </v-card-text>
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
      //Card details
      signSwitcher: "Sign In",
      accountStatus: "Already have an account?",
      //form details
      hasAccount: false,
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
  methods: {
    signSwitch: function () {
      if (this.signSwitcher == "Sign In") {
        this.signSwitcher = "Sign Up";
      } else {
        this.signSwitcher = "Sign In";
      }
      if (this.accountStatus == "Already have an account?") {
        this.accountStatus = "Don't have an account?";
      } else {
        this.accountStatus = "Already have an account?";
      }
      this.hasAccount = !this.hasAccount;
    },
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
