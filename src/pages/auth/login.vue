<template>
  <div>
    <v-content class="overflow-hidden">
      <v-container
        fluid
        grid-list-xl
        class="fill-height pa-0 bg-im"
        style="height: 100vh"
      >
        <v-layout row align-center justify-center >
          <v-row align="center" justify="center">
            <v-flex
              class="d-flex align-center"
              style="flex-direction: column"
              fill-height
            >
              <v-card title class="pa-8 s-c" height="auto" width="auto" >
                <v-row align="start" justify="center">
                <v-img 
                  lazy-src="https://i.postimg.cc/X7mxW0Sm/logonpo.png"
                  max-height="50px"
                  max-width="50px"
                  align="center"
                  justify="center"
                  src="https://i.postimg.cc/X7mxW0Sm/logonpo.png"></v-img>
                  </v-row>
                <v-card-title>Sign Up</v-card-title>
                <v-card-subtitle>
                  {{accountStatus}} <v-btn text @click="signSwitch">{{signSwitcher}}</v-btn>
                </v-card-subtitle>
                  <div v-if="hasAccount ==false">
                    <v-form ref="form" v-model="valid" lazy-validation class="">
                      <p>Name</p> 
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        outlined
                        required
                      ></v-text-field>
                      <p>E-mail</p>
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        outlined
                        required
                      ></v-text-field>
                      <p>Company</p>
                      <v-text-field
                        v-model="Company"
                        :counter="10"
                        outlined
                      ></v-text-field>
                      <p>Password</p>
                      <v-text-field
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
                        <v-btn to="/" color="#F58840" class="pa-6 mt-8 w-c white--text" @click="validate" rounded>
                          Create an account
                        </v-btn>
                      </v-row>
                    </v-form>
                  </div>  
                  <div v-else>  
                    <v-form>
                      <p>E-mail</p>
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        outlined
                        required
                      ></v-text-field>
                      <p>Password</p>
                      <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        outlined
                        @click:append="show1 = !show1"
                      ></v-text-field>
                      <v-row justify="center">
                        <v-btn to="/" color="#F58840" class="pa-6 mt-8 w-c white--text" @click="validate" rounded>
                          Sign In
                        </v-btn>
                      </v-row>
                    </v-form>
                  </div>  
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
      signSwitcher:'Sign In',
      accountStatus:'Already have an account?',
      //form details
      hasAccount:false,
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
    signSwitch: function(){
      if(this.signSwitcher =='Sign In'){
        this.signSwitcher='Sign Up'
      }else{
        this.signSwitcher='Sign In'
      }
      if(this.accountStatus=='Already have an account?'){
        this.accountStatus='Don\'t have an account?'
      }else{
        this.accountStatus='Already have an account?'
      }
      this.hasAccount=!this.hasAccount
    }
  }
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
